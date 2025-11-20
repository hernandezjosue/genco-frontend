"use client"

import { useRef, useMemo, useEffect, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import type * as THREE from "three"
import * as THREE_NS from "three"

interface GeoJSONFeature {
  type: string
  properties: any
  geometry: {
    type: string
    coordinates: any
  }
}

interface GeoJSONData {
  type: string
  features: GeoJSONFeature[]
}

function GlobeModel() {
  const globeRef = useRef<THREE.Mesh>(null)
  const outlineRef = useRef<THREE.LineSegments>(null)
  const dotsRef = useRef<THREE.Points>(null)
  const graticuleRef = useRef<THREE.LineSegments>(null)
  const [geoData, setGeoData] = useState<GeoJSONData | null>(null)

  // Fetch real GeoJSON data for land masses
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/martynafford/natural-earth-geojson/refs/heads/master/110m/physical/ne_110m_land.json",
    )
      .then((res) => res.json())
      .then((data) => setGeoData(data))
      .catch((err) => console.error("[v0] Failed to load GeoJSON:", err))
  }, [])

  // Convert lat/lon to 3D coordinates on sphere
  const latLonToVector3 = (lon: number, lat: number, radius: number) => {
    const phi = (90 - lat) * (Math.PI / 180)
    const theta = (lon + 180) * (Math.PI / 180)

    return new THREE_NS.Vector3(
      -radius * Math.sin(phi) * Math.cos(theta),
      radius * Math.cos(phi),
      radius * Math.sin(phi) * Math.sin(theta),
    )
  }

  const continentOutlines = useMemo(() => {
    if (!geoData) return null

    const points: THREE_NS.Vector3[] = []
    const radius = 2.0

    geoData.features.forEach((feature) => {
      const { coordinates, type } = feature.geometry

      const processPolygon = (polygon: any[]) => {
        polygon.forEach((ring) => {
          ring.forEach((coord: number[], i: number) => {
            const [lon, lat] = coord
            const point = latLonToVector3(lon, lat, radius)
            points.push(point)

            // Connect to next point
            if (i < ring.length - 1) {
              const [nextLon, nextLat] = ring[i + 1]
              const nextPoint = latLonToVector3(nextLon, nextLat, radius)
              points.push(nextPoint)
            }
          })
        })
      }

      if (type === "Polygon") {
        processPolygon(coordinates)
      } else if (type === "MultiPolygon") {
        coordinates.forEach(processPolygon)
      }
    })

    const geometry = new THREE_NS.BufferGeometry().setFromPoints(points)
    return geometry
  }, [geoData])

  const halftoneDotsGeometry = useMemo(() => {
    if (!geoData) return null

    const points: THREE_NS.Vector3[] = []
    const radius = 2.01
    const dotSpacing = 4 // Reduced spacing for better coverage (degrees)

    const pointInPolygon = (point: [number, number], polygon: number[][]): boolean => {
      const [x, y] = point
      let inside = false
      for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
        const [xi, yi] = polygon[i]
        const [xj, yj] = polygon[j]
        if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) {
          inside = !inside
        }
      }
      return inside
    }

    const pointInFeature = (lon: number, lat: number, feature: GeoJSONFeature): boolean => {
      const { coordinates, type } = feature.geometry
      const point: [number, number] = [lon, lat]

      if (type === "Polygon") {
        // Check if point is in outer ring
        if (!pointInPolygon(point, coordinates[0])) return false
        // Check if point is NOT in any hole (inner rings)
        for (let i = 1; i < coordinates.length; i++) {
          if (pointInPolygon(point, coordinates[i])) return false
        }
        return true
      } else if (type === "MultiPolygon") {
        for (const polygon of coordinates) {
          // Check if point is in outer ring
          if (pointInPolygon(point, polygon[0])) {
            // Check if point is NOT in any hole
            let inHole = false
            for (let i = 1; i < polygon.length; i++) {
              if (pointInPolygon(point, polygon[i])) {
                inHole = true
                break
              }
            }
            if (!inHole) return true
          }
        }
      }
      return false
    }

    // Generate dots across the globe with better distribution
    for (let lat = -90; lat <= 90; lat += dotSpacing) {
      // Adjust longitude step based on latitude to maintain consistent dot density
      const latRadians = (lat * Math.PI) / 180
      const lonStep = dotSpacing / Math.max(Math.cos(latRadians), 0.1)

      for (let lon = -180; lon <= 180; lon += lonStep) {
        // Check if this point is on land
        const isOnLand = geoData.features.some((feature) => pointInFeature(lon, lat, feature))

        if (isOnLand) {
          const point = latLonToVector3(lon, lat, radius)
          points.push(point)
        }
      }
    }

    console.log(`[v0] Generated ${points.length} halftone dots on land`)

    const geometry = new THREE_NS.BufferGeometry().setFromPoints(points)
    return geometry
  }, [geoData])

  const graticuleGeometry = useMemo(() => {
    const points: THREE_NS.Vector3[] = []
    const radius = 2.0
    const step = 15 // degrees

    // Latitude lines
    for (let lat = -90; lat <= 90; lat += step) {
      for (let lon = -180; lon < 180; lon += 5) {
        const point1 = latLonToVector3(lon, lat, radius)
        const point2 = latLonToVector3(lon + 5, lat, radius)
        points.push(point1, point2)
      }
    }

    // Longitude lines
    for (let lon = -180; lon <= 180; lon += step) {
      for (let lat = -90; lat < 90; lat += 5) {
        const point1 = latLonToVector3(lon, lat, radius)
        const point2 = latLonToVector3(lon, lat + 5, radius)
        points.push(point1, point2)
      }
    }

    const geometry = new THREE_NS.BufferGeometry().setFromPoints(points)
    return geometry
  }, [])

  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.002
    }
    if (outlineRef.current) {
      outlineRef.current.rotation.y += 0.002
    }
    if (dotsRef.current) {
      dotsRef.current.rotation.y += 0.002
    }
    if (graticuleRef.current) {
      graticuleRef.current.rotation.y += 0.002
    }
  })

  return (
    <group>
      <mesh ref={globeRef}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshBasicMaterial color="#e6f3f9" />
      </mesh>

      {graticuleGeometry && (
        <lineSegments ref={graticuleRef} geometry={graticuleGeometry}>
          <lineBasicMaterial color="#02405B" transparent opacity={0.15} />
        </lineSegments>
      )}

      {continentOutlines && (
        <lineSegments ref={outlineRef} geometry={continentOutlines}>
          <lineBasicMaterial color="#02405B" transparent opacity={0.8} linewidth={1} />
        </lineSegments>
      )}

      {halftoneDotsGeometry && (
        <points ref={dotsRef} geometry={halftoneDotsGeometry}>
          <pointsMaterial size={0.03} color="#014F79" transparent opacity={0.7} sizeAttenuation />
        </points>
      )}

      <mesh>
        <sphereGeometry args={[2.05, 64, 64]} />
        <meshBasicMaterial color="#02405B" transparent opacity={0.05} side={THREE_NS.BackSide} />
      </mesh>

      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 3, 5]} intensity={1} />
    </group>
  )
}

export function Globe() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }} gl={{ antialias: true, alpha: true }}>
        <color attach="background" args={["#fffff"]} />
        <GlobeModel />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          minDistance={3}
          maxDistance={8}
          rotateSpeed={0.5}
          zoomSpeed={0.8}
        />
      </Canvas>
    </div>
  )
}

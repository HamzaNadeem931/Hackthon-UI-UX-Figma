"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export default function ProductFilters() {
  const [priceRange, setPriceRange] = useState([50, 200])

  return (
    <div className="space-y-6">
      <div>
        <h3 className="mb-4 text-lg font-semibold">Filters</h3>
        <div className="space-y-4">
          <div>
            <h4 className="mb-2 font-medium">Categories</h4>
            <div className="space-y-2">
              <Label className="flex items-center space-x-2">
                <Checkbox />
                <span>T-shirts</span>
              </Label>
              <Label className="flex items-center space-x-2">
                <Checkbox />
                <span>Shorts</span>
              </Label>
              <Label className="flex items-center space-x-2">
                <Checkbox />
                <span>Shirts</span>
              </Label>
              <Label className="flex items-center space-x-2">
                <Checkbox />
                <span>Hoodie</span>
              </Label>
              <Label className="flex items-center space-x-2">
                <Checkbox />
                <span>Jeans</span>
              </Label>
            </div>
          </div>

          <div>
            <h4 className="mb-2 font-medium">Price Range</h4>
            <div className="space-y-4">
              <Slider
                value={priceRange}
                onValueChange={setPriceRange}
                max={200}
                min={50}
                step={1}
              />
              <div className="flex items-center justify-between">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-2 font-medium">Colors</h4>
            <div className="grid grid-cols-5 gap-2">
              {["green", "red", "yellow", "orange", "blue", "indigo", "purple", "pink", "white", "black"].map(
                (color) => (
                  <button
                    key={color}
                    className={`h-8 w-8 rounded-full border ${
                      color === "white" ? "border-gray-200 bg-white" : ""
                    }`}
                    style={{ backgroundColor: color === "white" ? "" : color }}
                  />
                )
              )}
            </div>
          </div>

          <div>
            <h4 className="mb-2 font-medium">Size</h4>
            <div className="grid grid-cols-3 gap-2">
              {["XX-Small", "X-Small", "Small", "Medium", "Large", "X-Large", "XX-Large", "3X-Large", "4X-Large"].map(
                (size) => (
                  <Label
                    key={size}
                    className="flex cursor-pointer items-center justify-center rounded-md border p-2 text-sm hover:bg-gray-100"
                  >
                    <Checkbox className="hidden" />
                    <span>{size}</span>
                  </Label>
                )
              )}
            </div>
          </div>

          <div>
            <h4 className="mb-2 font-medium">Dress Style</h4>
            <div className="space-y-2">
              <Label className="flex items-center space-x-2">
                <Checkbox />
                <span>Casual</span>
              </Label>
              <Label className="flex items-center space-x-2">
                <Checkbox />
                <span>Formal</span>
              </Label>
              <Label className="flex items-center space-x-2">
                <Checkbox />
                <span>Party</span>
              </Label>
              <Label className="flex items-center space-x-2">
                <Checkbox />
                <span>Gym</span>
              </Label>
            </div>
          </div>
        </div>
      </div>
      <Button className="w-full">Apply Filter</Button>
    </div>
  )
}


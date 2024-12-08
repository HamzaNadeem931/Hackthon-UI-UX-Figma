import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'

export function Pagination() {
  return (
    <div className="flex items-center justify-center gap-1">
      <Button variant="outline" size="icon">
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Previous page</span>
      </Button>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((page) => (
        <Button
          key={page}
          variant={page === 1 ? "default" : "outline"}
          size="icon"
          className="w-8"
        >
          {page}
        </Button>
      ))}
      <Button variant="outline" size="icon">
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Next page</span>
      </Button>
    </div>
  )
}


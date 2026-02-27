import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  onClick?: () => void;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className="bg-white border-b border-gray-200 py-3 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <nav className="flex items-center gap-2 text-sm overflow-x-auto whitespace-nowrap">
          <button
            onClick={items[0]?.onClick}
            className="flex items-center gap-1.5 text-gray-500 hover:text-purple-600 transition-colors"
          >
            <Home size={16} />
            <span>Início</span>
          </button>
          
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <ChevronRight size={16} className="text-gray-400" />
              {index === items.length - 1 ? (
                <span className="text-purple-700 font-semibold">{item.label}</span>
              ) : (
                <button
                  onClick={item.onClick}
                  className="text-gray-500 hover:text-purple-600 transition-colors"
                >
                  {item.label}
                </button>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isProductsOpen, setIsProductsOpen] = React.useState(false);
  const location = useLocation();

  const productMegaMenu = [
    {
      title: 'Smart Level Sensors',
      id: 'sensors',
      items: [
        { name: 'Liquid Level Sensors', href: '/products/sensors#group-0' },
        { name: 'Solid Level Sensors', href: '/products/sensors#group-1' },
        { name: 'Flow & Moisture', href: '/products/sensors#group-2' },
        { name: 'Gas Level Detection', href: '/products/sensors#group-3' },
      ]
    },
    {
      title: 'Advanced Filtration',
      id: 'filtration',
      items: [
        { name: 'Coolant & Oil Filtration', href: '/products/filtration#group-0' },
        { name: 'Food & Drinking Water', href: '/products/filtration#group-1' },
        { name: 'Environmental Systems', href: '/products/filtration#group-2' },
      ]
    },
    {
      title: 'Material Handling',
      id: 'handling',
      items: [
        { name: 'Conveyors & Chip Handling', href: '/products/handling#group-0' },
        { name: 'Specialized Conveyors', href: '/products/handling#group-1' },
        { name: 'Processing Solutions', href: '/products/handling#group-2' },
      ]
    },
    {
      title: 'SPM Solutions',
      id: 'spm',
      items: [
        { name: 'Assembly Automation', href: '/products/spm#group-0' },
        { name: 'Testing & Inspection', href: '/products/spm#group-0' },
        { name: 'Custom Process SPMs', href: '/products/spm#group-0' },
      ]
    }
  ];

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products', hasDropdown: true },
    { name: 'Contact', href: '/contact' },
    { name: 'Flipbook', href: '/TRIVANTAS_Flipbook.pdf' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/images/Icon-Color.png" alt="Trivantas Logo" className="h-14 w-14 object-contain" />
              <div className="flex flex-col items-start leading-tight">
                <span className="text-2xl font-bold text-primary">Trivantas</span>
                <span className="text-sm text-muted-foreground">One Stop Solution</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex flex-row items-center space-x-4">
              {navigation.map((item) => (
                item.hasDropdown ? (
                  <div
                    key={item.name}
                    className="relative py-2"
                    onMouseEnter={() => setIsProductsOpen(true)}
                    onMouseLeave={() => setIsProductsOpen(false)}
                  >
                    <Link
                      to={item.href}
                      className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-primary ${isActive(item.href)
                        ? 'text-primary bg-accent'
                        : 'text-muted-foreground hover:bg-accent'
                        }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`} />
                    </Link>

                    {/* Mega Menu Dropdown */}
                    <div className={`absolute left-1/2 -translate-x-1/2 mt-0 w-[800px] rounded-xl bg-background border border-border shadow-2xl transform transition-all duration-300 origin-top overflow-hidden ${isProductsOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}>
                      <div className="grid grid-cols-4 gap-6 p-8 bg-card">
                        {productMegaMenu.map((category) => (
                          <div key={category.title} className="space-y-4">
                            <Link
                              to={`/products/${category.id}`}
                              className="text-sm font-bold text-primary hover:underline block"
                            >
                              {category.title}
                            </Link>
                            <div className="space-y-2">
                              {category.items.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  to={subItem.href}
                                  className="block text-xs text-muted-foreground hover:text-primary transition-colors leading-relaxed"
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="bg-accent/30 p-4 border-t border-border flex justify-center">
                        <Link to="/products" className="text-xs font-medium text-primary hover:underline">
                          View All Industrial Solutions →
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  item.href.startsWith('/') && !item.href.endsWith('.pdf') ? (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-primary ${isActive(item.href)
                        ? 'text-primary bg-accent'
                        : 'text-muted-foreground hover:bg-accent'
                        }`}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 rounded-md text-sm font-medium transition-colors text-muted-foreground hover:text-primary hover:bg-accent"
                    >
                      {item.name}
                    </a>
                  )
                )
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/schedule">
              <Button variant="default" size="sm">
                Schedule Meeting
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-accent focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-border">
              {navigation.map((item) => (
                item.hasDropdown ? (
                  <div key={item.name} className="space-y-1">
                    <button
                      onClick={() => setIsProductsOpen(!isProductsOpen)}
                      className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-primary hover:bg-accent transition-colors"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`h-5 w-5 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isProductsOpen && (
                      <div className="pl-4 space-y-4 py-2">
                        {productMegaMenu.map((category) => (
                          <div key={category.title} className="space-y-2">
                            <Link
                              to={`/products#${category.id}`}
                              className="block px-3 py-1 text-sm font-bold text-primary"
                              onClick={() => {
                                setIsOpen(false);
                                setIsProductsOpen(false);
                              }}
                            >
                              {category.title}
                            </Link>
                            <div className="pl-3 space-y-1">
                              {category.items.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  to={subItem.href}
                                  className="block px-3 py-1 text-xs text-muted-foreground hover:text-primary transition-colors"
                                  onClick={() => {
                                    setIsOpen(false);
                                    setIsProductsOpen(false);
                                  }}
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  item.href.startsWith('/') && !item.href.endsWith('.pdf') ? (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive(item.href)
                        ? 'text-primary bg-accent'
                        : 'text-muted-foreground hover:text-primary hover:bg-accent'
                        }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-3 py-2 rounded-md text-base font-medium transition-colors text-muted-foreground hover:text-primary hover:bg-accent"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  )
                )
              ))}
              <div className="pt-2">
                <Link to="/schedule">
                  <Button variant="default" className="w-full" onClick={() => setIsOpen(false)}>
                    Schedule Meeting
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

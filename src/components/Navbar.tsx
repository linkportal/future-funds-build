
import React from 'react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { NavLink } from 'react-router-dom';
import { User, LogOut } from 'lucide-react';

export const Navbar = () => {
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <NavLink to="/" className="text-2xl font-bold text-blue-600">
              InvistaTop
            </NavLink>
            
            {user && (
              <div className="hidden md:flex items-center space-x-6">
                <NavLink 
                  to="/dashboard" 
                  className={({ isActive }) => 
                    `text-gray-600 hover:text-blue-600 transition-colors ${
                      isActive ? 'text-blue-600 font-medium' : ''
                    }`
                  }
                >
                  Dashboard
                </NavLink>
                <NavLink 
                  to="/projects" 
                  className={({ isActive }) => 
                    `text-gray-600 hover:text-blue-600 transition-colors ${
                      isActive ? 'text-blue-600 font-medium' : ''
                    }`
                  }
                >
                  Projetos
                </NavLink>
              </div>
            )}
          </div>

          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2 text-gray-700">
                  <User className="h-4 w-4" />
                  <span className="text-sm font-medium">
                    {user.user_metadata?.full_name || user.email}
                  </span>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={handleSignOut}
                  className="flex items-center space-x-1"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Sair</span>
                </Button>
              </div>
            ) : (
              <div className="text-sm text-gray-600">
                Faça login para acessar sua conta
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

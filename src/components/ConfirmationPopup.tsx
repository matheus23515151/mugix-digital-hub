import React from 'react';
import { CheckCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ConfirmationPopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  type?: 'success' | 'error';
}

export const ConfirmationPopup: React.FC<ConfirmationPopupProps> = ({
  isOpen,
  onClose,
  title,
  message,
  type = 'success'
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fade-in">
      <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4 animate-scale-in">
        <div className="text-center">
          <div className={`mx-auto mb-4 h-16 w-16 rounded-full flex items-center justify-center ${
            type === 'success' ? 'bg-green-100' : 'bg-red-100'
          }`}>
            <CheckCircle className={`h-8 w-8 ${
              type === 'success' ? 'text-green-600' : 'text-red-600'
            }`} />
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{message}</p>
          
          <Button 
            onClick={onClose}
            className="w-full"
          >
            Fechar
          </Button>
        </div>
      </div>
    </div>
  );
};
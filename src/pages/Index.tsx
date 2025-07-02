
import React, { useState } from 'react';
import AuthForm from '@/components/AuthForm';

const Index = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="min-h-screen auth-gradient flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <AuthForm isLogin={isLogin} onToggleMode={toggleAuthMode} />
      </div>
    </div>
  );
};

export default Index;

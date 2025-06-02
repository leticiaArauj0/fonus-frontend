import axios from "axios";
import React, { createContext, useContext, useState, ReactNode } from "react";

type User = {
  name: string;
  email: string;
  age?: number;
  childName?: string;
  childAge?: string;
  conditions?: string[];
  ageGroup?: '2-3' | '4-5' | '6-7';
};

type AuthContextType = {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
  updateUserConditions: (conditions: string[]) => void;
  updateUserChild: (childName: string, childAge: string) => void;
  updateAgeGroup: (ageGroup: "2-3" | "4-5" | "6-7") => Promise<void>
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
  logout: () => {},
  updateUserConditions: () => {},
  updateUserChild: () => {},
  updateAgeGroup: async () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (userData: User) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  const updateUserConditions = (conditions: string[]) => {
    if (user) {
      setUser({
        ...user,
        conditions
      });
    }
  };

  const updateUserChild = (childName: string, childAge: string) => {
    if (user) {
      setUser({
        ...user,
        childName,
        childAge
      });
    }
  };


  const updateAgeGroup = async (ageGroup: '2-3' | '4-5' | '6-7') => {
      try {
          const response = await axios.put("https://fonus-backend.onrender.com/update-agegroup", {
              email: user?.email,
              ageGroup
          });

          if (response.status === 200) {
              setUser(response.data.user);
          }
      } catch (error) {
          console.error("Erro ao atualizar faixa etária:", error);
      }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, updateUserConditions, updateUserChild, updateAgeGroup }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

"use client";

import { createContext, useContext } from "react";

export const ModalContext = createContext<any>(null);

export const useModal = () => useContext(ModalContext);
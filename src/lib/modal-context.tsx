"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"
import type { Package, Campaign } from "./mock-data"

export type ModalType =
  | "cash"
  | "package"
  | "campaign-detail"
  | "new-campaign"
  | "dropoff-success"
  | null

export interface ModalPayload {
  package?: Package
  tierIndex?: number
  campaign?: Campaign
  branch?: string
  items?: string[]
}

interface ModalContextType {
  activeModal: ModalType
  payload: ModalPayload
  openModal: (type: ModalType, payload?: ModalPayload) => void
  closeModal: () => void
}

const ModalContext = createContext<ModalContextType>({
  activeModal: null,
  payload: {},
  openModal: () => {},
  closeModal: () => {},
})

export function ModalProvider({ children }: { children: ReactNode }) {
  const [activeModal, setActiveModal] = useState<ModalType>(null)
  const [payload, setPayload] = useState<ModalPayload>({})

  const openModal = useCallback((type: ModalType, p: ModalPayload = {}) => {
    setActiveModal(type)
    setPayload(p)
    document.body.style.overflow = "hidden"
  }, [])

  const closeModal = useCallback(() => {
    setActiveModal(null)
    setPayload({})
    document.body.style.overflow = ""
  }, [])

  return (
    <ModalContext.Provider value={{ activeModal, payload, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  )
}

export function useModal() {
  return useContext(ModalContext)
}

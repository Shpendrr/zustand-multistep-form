import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type TFormState = {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
};

type TFormActions = {
  setCurrentStep: TFormState["setCurrentStep"];
  nextStep: TFormState["nextStep"];
  prevStep: TFormState["prevStep"];
};

const useMultiStepFormStore = create<
  TFormState & TFormActions,
  [["zustand/devtools", never], ["zustand/persist", TFormState & TFormActions]]
>(
  devtools(
    persist(
      (set) => ({
        currentStep: 1,
        setCurrentStep: (step: number) => set({ currentStep: step }),
        nextStep: () =>
          set((state) => ({ currentStep: state.currentStep + 1 })),
        prevStep: () =>
          set((state) => ({ currentStep: state.currentStep - 1 })),
      }),
      { name: "form-storage" }
    )
  )
);

export { useMultiStepFormStore };

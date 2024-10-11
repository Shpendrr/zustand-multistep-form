"use client";
import Button from "@/components/shared/button/button";
import ConditionalRender from "@/components/shared/conditional-render/ConditionalRender";
import Form from "@/components/shared/form/form";
import { useMultiStepFormStore } from "@/lib/store/useMultiStepForm";
import React from "react";

const Home = () => {
  const { currentStep, nextStep, prevStep } = useMultiStepFormStore();
  return (
    <div className="min-w-full">
      <h1 className="text-slate-700 text-3xl font-sans">Step {currentStep}</h1>
      <ConditionalRender condition={currentStep === 1}>
        <Form>
          <Button
            onClick={nextStep}
            className="bg-black text-white w-full  max-w-32 p-1 rounded-xl"
          >
            Next
          </Button>
        </Form>
      </ConditionalRender>
      <ConditionalRender condition={currentStep === 2}>
        <Form>
          <Button
            onClick={prevStep}
            className="bg-black text-white w-full  max-w-32 p-1 rounded-xl"
          >
            Back
          </Button>{" "}
        </Form>
      </ConditionalRender>
    </div>
  );
};

export default Home;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function ProposalApp() {
  const [step, setStep] = useState(0);

  const nextStep = () => setStep(step + 1);

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 to-purple-300">
      <motion.div
        key={step}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-md"
      >
        {step === 0 && (
          <>
            <h1 className="text-2xl font-bold mb-4">Hi Ayushi ❤️</h1>
            <p className="mb-6">I have something special for you...</p>
            <Button onClick={nextStep}>Start</Button>
          </>
        )}

        {step === 1 && (
          <>
            <h2 className="text-xl font-semibold mb-4">Do you remember our first meeting?</h2>
            <p className="mb-6">That moment changed everything for me.</p>
            <Button onClick={nextStep}>Next</Button>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-xl font-semibold mb-4">Every moment with you...</h2>
            <p className="mb-6">Feels like a beautiful dream I never want to wake up from.</p>
            <Button onClick={nextStep}>Next</Button>
          </>
        )}

        {step === 3 && (
          <>
            <h2 className="text-xl font-semibold mb-4">I found my happiness in you 💖</h2>
            <Button onClick={nextStep}>Next</Button>
          </>
        )}

        {step === 4 && (
          <>
            <h1 className="text-3xl font-bold mb-6 text-pink-600">
              Will you marry me? 💍
            </h1>
            <div className="flex justify-center gap-4">
              <Button onClick={() => alert("I knew it! ❤️")}>Yes</Button>
              <Button
                onClick={() => alert("Think again 😜")}
                className="bg-gray-400"
              >
                No
              </Button>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
}

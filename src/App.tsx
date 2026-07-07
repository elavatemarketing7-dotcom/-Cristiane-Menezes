/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import QuizOverlay from "./components/QuizOverlay";
import HeaderMarquee from "./components/HeaderMarquee";
import MainSite from "./components/MainSite";

export default function App() {
  const [showQuiz, setShowQuiz] = useState(true);

  const handleEnterSite = () => {
    setShowQuiz(false);
  };

  return (
    <div className="relative min-h-screen bg-[#0b0c10] text-[#f5eedf]">
      {/* Scrollable Main Landing Page */}
      <div className={`transition-all duration-500 ${showQuiz ? "filter blur-sm pointer-events-none scale-98" : "filter blur-0 pointer-events-auto scale-100"}`}>
        <HeaderMarquee />
        <MainSite />
      </div>

      {/* Interactive Compact Quiz Overlay */}
      {showQuiz && (
        <QuizOverlay onEnterSite={handleEnterSite} />
      )}
    </div>
  );
}

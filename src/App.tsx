/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LandingDashboard } from './components/LandingDashboard';
import { MbtiTest } from './components/MbtiTest';
import { MbtiResult } from './components/MbtiResult';
import { LearningStyleTest } from './components/LearningStyleTest';
import { RiasecTest } from './components/RiasecTest';
import { PersonalityLibrary } from './components/PersonalityLibrary';
import { CompatibilityTool } from './components/CompatibilityTool';
import { StudentProfileModal } from './components/StudentProfileModal';
import { HistoryModal } from './components/HistoryModal';
import { ShareAppModal } from './components/ShareAppModal';
import { PrintReport } from './components/PrintReport';
import { MbtiResultData, StudentProfile } from './types/psychology';

const PROFILE_KEY = 'psikologi_empathy_student_profile_v1';
const HISTORY_KEY = 'psikologi_empathy_history_v1';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('landing');

  // Student Profile state
  const [studentProfile, setStudentProfile] = useState<StudentProfile>(() => {
    try {
      const saved = localStorage.getItem(PROFILE_KEY);
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return {
      fullName: 'Aulia Zahra',
      grade: 'Profesional / Karyawan',
      schoolName: 'Jakarta',
      targetMajor: 'Pengembangan Karier & Kepemimpinan'
    };
  });

  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  // Saved Results History
  const [savedResults, setSavedResults] = useState<MbtiResultData[]>(() => {
    try {
      const saved = localStorage.getItem(HISTORY_KEY);
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return [];
  });

  // Active result state (use latest saved result if available)
  const [activeMbtiResult, setActiveMbtiResult] = useState<MbtiResultData | null>(() => {
    try {
      const saved = localStorage.getItem(HISTORY_KEY);
      if (saved) {
        const list = JSON.parse(saved);
        if (list && list.length > 0) return list[0];
      }
    } catch {
      // fallback
    }
    return null;
  });

  const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  // Compatibility comparison state
  const [compareTypeA, setCompareTypeA] = useState<string>('INFP');
  const [compareTypeB, setCompareTypeB] = useState<string>('ENFJ');

  // Save profile to localStorage
  const handleSaveProfile = (profile: StudentProfile) => {
    setStudentProfile(profile);
    try {
      localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
    } catch {
      // ignore
    }
  };

  // Complete MBTI Test handler
  const handleCompleteTest = (result: MbtiResultData) => {
    setActiveMbtiResult(result);
    setCompareTypeA(result.type);
    setCurrentTab('mbti-result');

    // Save to history
    const updated = [result, ...savedResults.filter((r) => r.id !== result.id)].slice(0, 20);
    setSavedResults(updated);
    try {
      localStorage.setItem(HISTORY_KEY, JSON.stringify(updated));
    } catch {
      // ignore
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDeleteHistoryItem = (id: string) => {
    const updated = savedResults.filter((item) => item.id !== id);
    setSavedResults(updated);
    try {
      localStorage.setItem(HISTORY_KEY, JSON.stringify(updated));
    } catch {
      // ignore
    }
    if (activeMbtiResult?.id === id) {
      setActiveMbtiResult(updated.length > 0 ? updated[0] : null);
    }
  };

  const handleClearAllHistory = () => {
    setSavedResults([]);
    setActiveMbtiResult(null);
    try {
      localStorage.removeItem(HISTORY_KEY);
    } catch {
      // ignore
    }
  };

  const handleCompareSpecific = (typeA: string, typeB?: string) => {
    setCompareTypeA(typeA);
    if (typeB) setCompareTypeB(typeB);
    setCurrentTab('compatibility');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 overflow-x-clip">
      {/* Navigation Bar (Hidden in Print) */}
      <div className="no-print">
        <Navbar
          currentTab={currentTab}
          onSelectTab={(tab) => {
            setCurrentTab(tab);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onOpenHistory={() => setIsHistoryModalOpen(true)}
          onOpenShare={() => setIsShareModalOpen(true)}
          savedCount={savedResults.length}
        />
      </div>

      {/* Main Content Area */}
      <main className="flex-1 no-print">
        {currentTab === 'landing' && (
          <LandingDashboard
            studentProfile={studentProfile}
            activeMbtiResult={activeMbtiResult}
            savedResultsCount={savedResults.length}
            onOpenProfileModal={() => setIsProfileModalOpen(true)}
            onNavigateTab={(tab) => {
              setCurrentTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenHistory={() => setIsHistoryModalOpen(true)}
          />
        )}

        {currentTab === 'mbti-test' && (
          <MbtiTest
            studentProfile={studentProfile}
            onOpenProfileModal={() => setIsProfileModalOpen(true)}
            onCompleteTest={handleCompleteTest}
          />
        )}

        {currentTab === 'mbti-result' && activeMbtiResult && (
          <MbtiResult
            result={activeMbtiResult}
            onRetest={() => {
              setCurrentTab('mbti-test');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onCompareWith={(type) => {
              setCompareTypeA(type);
              setCurrentTab('compatibility');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSwitchToLearningStyle={() => {
              setCurrentTab('learning-style');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentTab === 'learning-style' && (
          <LearningStyleTest
            studentProfile={studentProfile}
            onSwitchToMbti={() => {
              setCurrentTab('mbti-test');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentTab === 'riasec-test' && (
          <RiasecTest
            studentProfile={studentProfile}
            onSwitchToMbti={() => {
              setCurrentTab('mbti-test');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentTab === 'personality-library' && (
          <PersonalityLibrary
            onStartTest={() => {
              setCurrentTab('mbti-test');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onCompare={(tA, tB) => handleCompareSpecific(tA, tB)}
          />
        )}

        {currentTab === 'compatibility' && (
          <CompatibilityTool
            initialTypeA={compareTypeA}
            initialTypeB={compareTypeB}
            onSwitchToTest={() => {
              setCurrentTab('mbti-test');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}
      </main>

      {/* Official Print Layout (Only rendered during window.print) */}
      <PrintReport result={activeMbtiResult} />

      {/* Footer (Hidden in Print) */}
      <Footer onSelectTab={(tab) => {
        setCurrentTab(tab);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }} />

      {/* Profile Modal */}
      <StudentProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        onSave={handleSaveProfile}
        initialProfile={studentProfile}
      />

      {/* History Modal */}
      <HistoryModal
        isOpen={isHistoryModalOpen}
        onClose={() => setIsHistoryModalOpen(false)}
        savedResults={savedResults}
        onSelectResult={(res) => {
          setActiveMbtiResult(res);
          setCurrentTab('mbti-result');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onDeleteResult={handleDeleteHistoryItem}
        onClearAll={handleClearAllHistory}
      />

      {/* Share Application Modal */}
      <ShareAppModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
      />

      {/* Discreet Corner Attribution on Desktop */}
      <div className="no-print hidden xl:flex fixed bottom-3 right-4 z-30 pointer-events-none select-none px-2.5 py-1 rounded-lg bg-white/85 backdrop-blur-xs border border-slate-200/80 text-[11px] font-medium text-slate-500 shadow-2xs">
        program dibuat oleh : DANIWILDANI
      </div>
    </div>
  );
}

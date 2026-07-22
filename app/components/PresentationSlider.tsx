'use client';

import { useState, useEffect } from 'react';
import ContactModal from './ContactModal';
import NavigationBar from './NavigationBar';
import BottomDock from './BottomDock';

import IntroSlide from '../slides/IntroSlide';
import PlanSlide from '../slides/PlanSlide';
import WhoIsMohamedSlide from '../slides/WhoIsMohamedSlide';
import AcademicMilestonesEspritSlide from '../slides/AcademicMilestonesEspritSlide';
import AcademicMilestonesFstSlide from '../slides/AcademicMilestonesFstSlide';
import Title from '../slides/Title';
import GoldenGateTitleSlide from '../slides/projects/goldengate/GoldenGateTitleSlide';
import GoldenGateProblemSlide from '../slides/projects/goldengate/GoldenGateProblemSlide';
import GoldenGateMetricsSlide from '../slides/projects/goldengate/GoldenGateMetricsSlide';
import GuestLogisticsTitleSlide from '../slides/projects/wize_ailien_guest/GuestLogisticsTitleSlide';
import GuestLogisticsDetailsSlide from '../slides/projects/wize_ailien_guest/GuestLogisticsDetailsSlide';
import WizeAilienDevOpsDetailsSlide from '../slides/projects/wize_ailien_devops/WizeAilienDevOpsDetailsSlide';
import WizeAilienDevOpsTitleSlide from '../slides/projects/wize_ailien_devops/WizeAilienDevOpsTitleSlide';
import CytekiaTitleSlide from '../slides/projects/cytekia/CytekiaTitleSlide';
import CytekiaDetailsSlide from '../slides/projects/cytekia/CytekiaDetailsSlide';
import SpotlightTitleSlide from '../slides/projects/spotlight/SpotlightTitleSlide';
import SpotlightDetailsSlide from '../slides/projects/spotlight/SpotlightDetailsSlide';
import SmartTransferTitleSlide from '../slides/university_projects/smartTransfer/SmartTransferTitleSlide';
import SmartTransferDetailsSlide from '../slides/university_projects/smartTransfer/SmartTransferDetailsSlide';
import TravelAppTitleSlide from '../slides/university_projects/travel_gency/GuidMeTitleSlide';
import TravelAppDetailsSlide from '../slides/university_projects/travel_gency/GuideMeDetailsSlide';
import ContactSlide from '../slides/Contact';
import StackSlide from '../slides/SkillsSlide';

const SLIDES = [
  { id: 'intro', title: '', component: IntroSlide },
  { id: 'plan', title: '', component: PlanSlide },
  {
    id: '01',
    title: '',
    component: () => (
      <Title
        slideNumber="01"
        title="Who Is"
        subtitle="Mohamed Hechmi Ben Hadid"
      />
    )
  },
  { id: 'Engineering Philosophy', title: '', component: WhoIsMohamedSlide },
  {
    id: '02',
    title: '',
    component: () => (
      <Title
        slideNumber="02"
        title="Academic Career"
        subtitle=""
      />
    )
  },
  { id: 'Academic Degree fst', title: '', component: AcademicMilestonesFstSlide },
  { id: 'Academic Degree', title: '', component: AcademicMilestonesEspritSlide },
  {
    id: '03',
    title: '',
    component: () => (
      <Title
        slideNumber="03"
        title="Professional Experience"
        subtitle="Internships / Freelance"
      />
    )
  },
  { id: 'goldengate-title', title: '', component: GoldenGateTitleSlide },
  { id: 'goldengate-problem', title: '', component: GoldenGateProblemSlide },
  { id: 'goldengate-metrics', title: '', component: GoldenGateMetricsSlide },
  { id: 'guestLogisticsTitleSlide', title: '', component: GuestLogisticsTitleSlide },
  { id: 'guestLogisticsDetailsSlide', title: '', component: GuestLogisticsDetailsSlide },
  { id: 'WizeAilienDevOpsTitleSlide', title: '', component: WizeAilienDevOpsTitleSlide },
  { id: 'WizeAilienDevOpsDetailsSlide', title: '', component: WizeAilienDevOpsDetailsSlide },
  { id: 'CytekiaTitleSlide', title: '', component: CytekiaTitleSlide },
  { id: 'CytekiaDetailsSlide', title: '', component: CytekiaDetailsSlide },
  { id: 'SpotlightTitleSlide', title: '', component: SpotlightTitleSlide },
  { id: 'SpotlightDetailsSlide', title: '', component: SpotlightDetailsSlide },
  {
    id: '04',
    title: '',
    component: () => (
      <Title
        slideNumber="04"
        title="University Projects"
        subtitle=""
      />
    )
  },
  { id: 'SmartTransferTitleSlide', title: '', component: SmartTransferTitleSlide },
  { id: 'SmartTransferDetailsSlide', title: '', component: SmartTransferDetailsSlide },
  { id: 'TravelAppTitleSlide', title: '', component: TravelAppTitleSlide },
  { id: 'TravelAppDetailsSlide', title: '', component: TravelAppDetailsSlide },
  {
    id: '05',
    title: '',
    component: () => (
      <Title
        slideNumber="05"
        title="Skills"
        subtitle="Tools With Simple Knowledge"
      />
    )
  },
  { id: 'stackSlide', title: '', component: StackSlide },
  {
    id: '06',
    title: '',
    component: () => (
      <Title
        slideNumber="06"
        title="Contact"
        subtitle="Initiate Connection"
      />
    )
  },
  { id: 'ContactSlide', title: '', component: ContactSlide },
];

export default function PresentationSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  // Touch Tracking State variables for fluid swiping
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Minimum pixel distance to register a true intentional swipe gesture
  const minSwipeDistance = 50;

  const nextSlide = () => {
    if (currentSlide < SLIDES.length - 1) setCurrentSlide(prev => prev + 1);
  };

  const prevSlide = () => {
    if (currentSlide > 0) setCurrentSlide(prev => prev - 1);
  };

  // Synchronize global document classes for portals/modals
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'light') {
      root.classList.remove('dark');
      root.classList.add('light');
    } else {
      root.classList.remove('light');
      root.classList.add('dark');
    }
  }, [theme]);

  // Handle standard desktop key events
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  // Handle mobile swipe confirmation mechanics
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  const isLight = theme === 'light';
  const containerBg = isLight ? 'bg-white' : 'bg-zinc-950';
  const containerText = isLight ? 'text-zinc-900' : 'text-white';

  return (
    <div className={`relative w-screen h-[100dvh] overflow-hidden transition-colors duration-500 ${containerBg} ${containerText}`}>

      {/* Top Floating Navbar */}
      <NavigationBar
        theme={theme}
        onOpenContact={() => setIsModalOpen(true)}
      />

      {/* Main Slide Stage Container */}
      <div
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        className="relative w-full h-full flex items-center justify-center touch-pan-y"
      >
        {SLIDES.map((slide, index) => {
          const ActiveComponent = slide.component;

          let transformClass = 'translate-x-full';
          if (index === currentSlide) transformClass = 'translate-x-0';
          if (index < currentSlide) transformClass = '-translate-x-full';

          return (
            <div
              key={slide.id}
              /* 
                FIX: Replaced top-0 with fixed absolute dimension mapping.
                Ensuring overflow-y-auto combined with max-h calculation lets the card 
                scroll naturally on mobile views while keeping the fixed parent background stable.
              */
              className={`absolute inset-0 w-full h-full overflow-y-auto scrollbar-thin transition-transform duration-500 ease-in-out ${transformClass}`}
              style={{ zIndex: index === currentSlide ? 10 : 0 }}
            >
              {/* Inner container with background image */}
              <div
                className={`w-full min-h-full flex flex-col justify-center items-center  transition-colors duration-500 ${containerBg} relative`}
                style={{
                  backgroundImage: "url('esprit_mile_back.jpg')",
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundAttachment: 'scroll' // Prevents mobile graphic viewport lag
                }}
              >
                {/* Background Tint Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/80 z-0" />

                {/* Active component sits above the gradient */}
                <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center justify-center">
                  <ActiveComponent />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Presentation Bottom Navigation Dock */}
      <BottomDock
        slides={SLIDES}
        currentSlide={currentSlide}
        theme={theme}
        onSelectSlide={setCurrentSlide}
      />

      {/* Overlay Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
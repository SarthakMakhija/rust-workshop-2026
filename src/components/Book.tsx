import React, { useRef, useState, useCallback, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { 
  WorkshopCover,
  Stage1Cover, 
  Intro, 
  Stage1Roadmap,
  BasicCache, 
  Operations, 
  StructsReferences,
  MethodReceivers,
  StringLayout,
  OwnershipDetails,
  AllocationProblem,
  StringTypes,
  OptimizedCache
} from './sections/section1/Index';
import {
  Section2Cover,
  Section2Intro,
  Section2Roadmap,
  PrimitiveObsession,
  NewTypePattern,
  DerivingTraits,
  TypeSafeCache,
  SafetyVerification
} from './sections/section2/Index';
import {
  Section3Cover,
  Section3Intro,
  IntroducingGenerics,
  TraitBounds,
  GenericSyntax,
  TheBorrowTrait,
  GenericCacheImpl,
  GenericTests
} from './sections/section3/Index';
import { 
  Section4Cover,
  Stage4Roadmap,
  IntroduceGetMut,
  MutableScopeProblem,
  AliasMutationError,
  TheUpdateMethod,
  UpdateImplCode,
  UpdateTests,
  MultipleUpdatesScope,
  ClosureTraits,
  InteriorMutabilityPath
} from './sections/section4/Index';
import { Section5Cover } from './sections/section5/Index';
import {
  Section6Cover,
  Section6Intro,
  ConcurrencyIntro,
  CompilationError,
  ThreadSafeWrapper,
  RAIIGuards,
  InnerLockingDrop,
  TheDerefTrait,
  TheUnwrapMystery,
  TheBrokenGet,
  OwnershipShift,
  SafeCacheImpl,
  ThreadSafeTests
} from './sections/section6/Index';
import {
  Section7Cover,
  Section7Intro,
  TheCloningTax,
  IntroducingArc,
  ArcMechanics,
  ArcInsideCache,
  ArcDeref,
  FinalArcImplementation,
  ArcTests
} from './sections/section7/Index';
import {
  Section8Cover,
  Stage8Roadmap,
  Section8Intro,
  CustomRefPattern,
  LifetimeAnchor,
  ThePointerTrick,
  UnsafeDeref,
  LockTradeoff,
  ZeroCopyTests,
  Section8Summary
} from './sections/section8/Index';
import {
  Section9Cover,
  Stage9Roadmap,
  BeyondScope,
  TheOwnershipWall,
  FoundationOfConcurrency,
  SharedCacheArc,
  SendAndSync,
  FinalVerification
} from './sections/section9/Index';
import {
  Section10Cover,
  Stage10Roadmap,
  LockContentionIntro,
  ShardingDesign,
  TheShardedStruct,
  HashingAndIndexing,
  ShardedImplementation,
  ShardedAccess,
  ShardedVerification
} from './sections/section10/Index';
import {
  Section11Cover,
  Stage11Roadmap,
  TheStaleDataProblem,
  TheShardAbstraction,
  ShardPutCode,
  ShardGetLazy,
  ZeroCopyRefTTL,
  CacheRefactorCode,
  ContentionManagement,
  ShardCleanupCode,
  BackgroundCleanerAssignment,
  BackgroundCleanerImpl,
  NonCooperativeCleaner
} from './sections/section11/Index';
import { 
  Section12Cover,
  Stage12Roadmap,
  TheMetricsProblem,
  LockBasedDesign,
  AtomicsIntro,
  MemoryHierarchy,
  InstructionOptimization,
  MemoryModelHappensBefore,
  MemoryOrderingRelaxed,
  MemoryOrderingAcqRel,
  MemoryOrderingSeqCst,
  MESIProtocol,
  ConcurrentStatsDesign,
  FalseSharingBad,
  OptimizedConcurrentStats
} from './sections/section12/Index';
import {
  Section13Cover,
  Stage13Roadmap,
  ShutdownIntro,
  NaiveApproach,
  OwnershipTermination,
  TypeStateConcept,
  CompilerAsGuard,
  Section13Summary
} from './sections/section13/Index';

const Book: React.FC = () => {
  const bookRef = useRef<any>(null);
  const [currentPage, setCurrentPage] = useState(0);

  const onPage = useCallback((e: any) => {
    setCurrentPage(e.data);
  }, []);

  const nextPrevPage = useCallback((direction: 'next' | 'prev') => {
    if (bookRef.current) {
      if (direction === 'next') {
        bookRef.current.pageFlip().flipNext();
      } else {
        bookRef.current.pageFlip().flipPrev();
      }
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        nextPrevPage('next');
      } else if (e.key === 'ArrowLeft') {
        nextPrevPage('prev');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextPrevPage]);

  return (
    <div className="book-container">
      {/* @ts-ignore */}
      <HTMLFlipBook
        width={800}
        height={850}
        size="stretch"
        minWidth={315}
        maxWidth={2500}
        minHeight={400}
        maxHeight={2500}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        onFlip={onPage}
        className="flip-book"
        ref={bookRef}
      >
        {/* Overall Cover */}
        <WorkshopCover />

        {/* Section 1 */}
        <Stage1Cover number={1} />
        <Intro number={2} />
        <Stage1Roadmap number={3} />
        <BasicCache number={4} />
        <Operations number={5} />
        <StructsReferences number={6} />
        <MethodReceivers number={7} />
        <StringLayout number={8} />
        <OwnershipDetails number={9} />
        <AllocationProblem number={10} />
        <StringTypes number={11} />
        <OptimizedCache number={12} />

        {/* Section 2 */}
        <Section2Cover number={13} />
        <Section2Intro number={14} />
        <Section2Roadmap number={15} />
        <PrimitiveObsession number={16} />
        <NewTypePattern number={17} />
        <DerivingTraits number={18} />
        <TypeSafeCache number={19} />
        <SafetyVerification number={20} />

        {/* Section 3 */}
        <Section3Cover number={21} />
        <Section3Intro number={22} />
        <IntroducingGenerics number={23} />
        <TraitBounds number={24} />
        <GenericSyntax number={25} />
        <TheBorrowTrait number={26} />
        <GenericCacheImpl number={27} />
        <GenericTests number={28} />

        {/* Stage 4 */}
        <Section4Cover number={29} />
        <Stage4Roadmap number={30} />
        <IntroduceGetMut number={31} />
        <MutableScopeProblem number={32} />
        <AliasMutationError number={33} />
        <TheUpdateMethod number={34} />
        <UpdateImplCode number={35} />
        <UpdateTests number={36} />
        <MultipleUpdatesScope number={37} />
        <ClosureTraits number={38} />
        <InteriorMutabilityPath number={39} />

        {/* Stage 5 Placeholder */}
        <Section5Cover number={40} />

        {/* Stage 6 */}
        <Section6Cover number={41} />
        <Section6Intro number={42} />
        <ConcurrencyIntro number={43} />
        <CompilationError number={44} />
        <ThreadSafeWrapper number={45} />
        <RAIIGuards number={46} />
        <InnerLockingDrop number={47} />
        <TheDerefTrait number={48} />
        <TheUnwrapMystery number={49} />
        <TheBrokenGet number={50} />
        <OwnershipShift number={51} />
        <SafeCacheImpl number={52} />
        <ThreadSafeTests number={53} />

        {/* Stage 7 */}
        <Section7Cover number={54} />
        <Section7Intro number={55} />
        <TheCloningTax number={56} />
        <IntroducingArc number={57} />
        <ArcMechanics number={58} />
        <ArcInsideCache number={59} />
        <ArcDeref number={60} />
        <FinalArcImplementation number={61} />
        <ArcTests number={62} />

        {/* Stage 8 */}
        <Section8Cover number={63} />
        <Stage8Roadmap number={64} />
        <Section8Intro number={65} />
        <CustomRefPattern number={66} />
        <LifetimeAnchor number={67} />
        <ThePointerTrick number={68} />
        <UnsafeDeref number={69} />
        <LockTradeoff number={70} />
        <ZeroCopyTests number={71} />
        <Section8Summary number={72} />

        {/* Stage 9 */}
        <Section9Cover number={73} />
        <Stage9Roadmap number={74} />
        <BeyondScope number={75} />
        <TheOwnershipWall number={76} />
        <FoundationOfConcurrency number={77} />
        <SharedCacheArc number={78} />
        <SendAndSync number={79} />
        <FinalVerification number={80} />

        {/* Stage 10 */}
        <Section10Cover number={81} />
        <Stage10Roadmap number={82} />
        <LockContentionIntro number={83} />
        <ShardingDesign number={84} />
        <TheShardedStruct number={85} />
        <HashingAndIndexing number={86} />
        <ShardedImplementation number={87} />
        <ShardedAccess number={88} />
        <ShardedVerification number={89} />

        {/* Stage 11 */}
        <Section11Cover number={90} />
        <Stage11Roadmap number={91} />
        <TheStaleDataProblem number={92} />
        <TheShardAbstraction number={93} />
        <ShardPutCode number={94} />
        <ShardGetLazy number={95} />
        <ZeroCopyRefTTL number={96} />
        <CacheRefactorCode number={97} />
        <ContentionManagement number={98} />
        <ShardCleanupCode number={99} />
        <BackgroundCleanerAssignment number={100} />
        <BackgroundCleanerImpl number={101} />
        <NonCooperativeCleaner number={102} />

        {/* Stage 12 */}
        <Section12Cover number={103} />
        <Stage12Roadmap number={104} />
        <TheMetricsProblem number={105} />
        <LockBasedDesign number={106} />
        <AtomicsIntro number={107} />
        <MemoryHierarchy number={108} />
        <InstructionOptimization number={109} />
        <MemoryModelHappensBefore number={110} />
        <MemoryOrderingRelaxed number={111} />
        <MemoryOrderingAcqRel number={112} />
        <MemoryOrderingSeqCst number={113} />
        <ConcurrentStatsDesign number={114} />
        <MESIProtocol number={115} />
        <FalseSharingBad number={116} />
        <OptimizedConcurrentStats number={117} />

        {/* Stage 13 */}
        <Section13Cover number={118} />
        <Stage13Roadmap number={119} />
        <ShutdownIntro number={120} />
        <NaiveApproach number={121} />
        <OwnershipTermination number={122} />
        <TypeStateConcept number={123} />
        <CompilerAsGuard number={124} />
        <Section13Summary number={125} />
      </HTMLFlipBook>

      <div className="controls">
        <button onClick={() => nextPrevPage('prev')}>Previous Page</button>
        <button onClick={() => nextPrevPage('next')}>Next Page</button>
      </div>
    </div>
  );
};

export default Book;

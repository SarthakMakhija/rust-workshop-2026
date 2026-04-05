import React, { useRef, useState, useCallback, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { 
  WorkshopCover,
  Stage1Cover, 
  Intro, 
  Stage1Roadmap,
  BasicCache, 
  Operations, 
  References,
  StructTypes,
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
import { 
  Section5Cover,
  Stage5Roadmap,
  TheEntryStruct,
  RefCellMethods,
  CacheIntegration,
  RuntimeBorrowProblem,
  RuntimePanicError
} from './sections/section5/Index';
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
import {
  Section14Cover,
  Stage14Roadmap,
  TheBuilderPattern,
  CacheBuilderImpl,
  IntegrationTestingIntro,
  CacheIntegrationTest,
  WorkshopConclusion
} from './sections/section14/Index';

const Book: React.FC = () => {
  const bookRef = useRef<any>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [isReady, setIsReady] = useState(false);

  const onInit = useCallback(() => {
    // Small delay to ensure layout has settled
    setTimeout(() => setIsReady(true), 150);
  }, []);

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
    <div className={`book-container ${isReady ? 'ready' : 'loading'}`}>
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
        onInit={onInit}
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
        <References number={6} />
        <StructTypes number={7} />
        <MethodReceivers number={8} />
        <StringLayout number={9} />
        <OwnershipDetails number={10} />
        <AllocationProblem number={11} />
        <StringTypes number={12} />
        <OptimizedCache number={13} />

        {/* Section 2 */}
        <Section2Cover number={14} />
        <Section2Intro number={15} />
        <Section2Roadmap number={16} />
        <PrimitiveObsession number={17} />
        <NewTypePattern number={18} />
        <DerivingTraits number={19} />
        <TypeSafeCache number={20} />
        <SafetyVerification number={21} />

        {/* Section 3 */}
        <Section3Cover number={22} />
        <Section3Intro number={23} />
        <IntroducingGenerics number={24} />
        <TraitBounds number={25} />
        <GenericSyntax number={26} />
        <TheBorrowTrait number={27} />
        <GenericCacheImpl number={28} />
        <GenericTests number={29} />

        {/* Stage 4 */}
        <Section4Cover number={30} />
        <Stage4Roadmap number={31} />
        <IntroduceGetMut number={32} />
        <MutableScopeProblem number={33} />
        <AliasMutationError number={34} />
        <TheUpdateMethod number={35} />
        <UpdateImplCode number={36} />
        <UpdateTests number={37} />
        <MultipleUpdatesScope number={38} />
        <ClosureTraits number={39} />
        <InteriorMutabilityPath number={40} />

        {/* Stage 5 */}
        <Section5Cover number={41} />
        <Stage5Roadmap number={42} />
        <TheEntryStruct number={43} />
        <RefCellMethods number={44} />
        <CacheIntegration number={45} />
        <RuntimeBorrowProblem number={46} />
        <RuntimePanicError number={47} />

        {/* Stage 6 */}
        <Section6Cover number={48} />
        <Section6Intro number={49} />
        <ConcurrencyIntro number={50} />
        <CompilationError number={51} />
        <ThreadSafeWrapper number={52} />
        <RAIIGuards number={53} />
        <InnerLockingDrop number={54} />
        <TheDerefTrait number={55} />
        <TheUnwrapMystery number={56} />
        <TheBrokenGet number={57} />
        <OwnershipShift number={58} />
        <SafeCacheImpl number={59} />
        <ThreadSafeTests number={60} />

        {/* Stage 7 */}
        <Section7Cover number={61} />
        <Section7Intro number={62} />
        <TheCloningTax number={63} />
        <IntroducingArc number={64} />
        <ArcMechanics number={65} />
        <ArcInsideCache number={66} />
        <ArcDeref number={67} />
        <FinalArcImplementation number={68} />
        <ArcTests number={69} />

        {/* Stage 8 */}
        <Section8Cover number={70} />
        <Stage8Roadmap number={71} />
        <Section8Intro number={72} />
        <CustomRefPattern number={73} />
        <LifetimeAnchor number={74} />
        <ThePointerTrick number={75} />
        <UnsafeDeref number={76} />
        <LockTradeoff number={77} />
        <ZeroCopyTests number={78} />
        <Section8Summary number={79} />

        {/* Stage 9 */}
        <Section9Cover number={80} />
        <Stage9Roadmap number={81} />
        <BeyondScope number={82} />
        <TheOwnershipWall number={83} />
        <FoundationOfConcurrency number={84} />
        <SharedCacheArc number={85} />
        <SendAndSync number={86} />
        <FinalVerification number={87} />

        {/* Stage 10 */}
        <Section10Cover number={88} />
        <Stage10Roadmap number={89} />
        <LockContentionIntro number={90} />
        <ShardingDesign number={91} />
        <TheShardedStruct number={92} />
        <HashingAndIndexing number={93} />
        <ShardedImplementation number={94} />
        <ShardedAccess number={95} />
        <ShardedVerification number={96} />

        {/* Stage 11 */}
        <Section11Cover number={97} />
        <Stage11Roadmap number={98} />
        <TheStaleDataProblem number={99} />
        <TheShardAbstraction number={100} />
        <ShardPutCode number={101} />
        <ShardGetLazy number={102} />
        <ZeroCopyRefTTL number={103} />
        <CacheRefactorCode number={104} />
        <ContentionManagement number={105} />
        <ShardCleanupCode number={106} />
        <BackgroundCleanerAssignment number={107} />
        <BackgroundCleanerImpl number={108} />
        <NonCooperativeCleaner number={109} />

        {/* Stage 12 */}
        <Section12Cover number={110} />
        <Stage12Roadmap number={111} />
        <TheMetricsProblem number={112} />
        <LockBasedDesign number={113} />
        <AtomicsIntro number={114} />
        <MemoryHierarchy number={115} />
        <InstructionOptimization number={116} />
        <MemoryModelHappensBefore number={117} />
        <MemoryOrderingRelaxed number={118} />
        <MemoryOrderingAcqRel number={119} />
        <MemoryOrderingSeqCst number={120} />
        <ConcurrentStatsDesign number={121} />
        <MESIProtocol number={122} />
        <FalseSharingBad number={123} />
        <OptimizedConcurrentStats number={124} />

        {/* Stage 13 */}
        <Section13Cover number={125} />
        <Stage13Roadmap number={126} />
        <ShutdownIntro number={127} />
        <NaiveApproach number={128} />
        <OwnershipTermination number={129} />
        <TypeStateConcept number={130} />
        <CompilerAsGuard number={131} />
        <Section13Summary number={132} />

        {/* Stage 14 */}
        <Section14Cover number={133} />
        <Stage14Roadmap number={134} />
        <TheBuilderPattern number={135} />
        <CacheBuilderImpl number={136} />
        <IntegrationTestingIntro number={137} />
        <CacheIntegrationTest number={138} />
        <WorkshopConclusion number={139} />
      </HTMLFlipBook>

      <div className="controls">
        <button onClick={() => nextPrevPage('prev')}>Previous Page</button>
        <button onClick={() => nextPrevPage('next')}>Next Page</button>
      </div>
    </div>
  );
};

export default Book;

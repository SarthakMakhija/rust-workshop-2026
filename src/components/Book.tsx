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
import { TOCLeft, TOCRight } from './sections/TOC';
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
        <TOCLeft number={1} />
        <TOCRight number={2} />

        {/* Section 1 */}
        <Stage1Cover number={3} />
        <Intro number={4} />
        <Stage1Roadmap number={5} />
        <BasicCache number={6} />
        <Operations number={7} />
        <References number={8} />
        <StructTypes number={9} />
        <MethodReceivers number={10} />
        <StringLayout number={11} />
        <OwnershipDetails number={12} />
        <AllocationProblem number={13} />
        <StringTypes number={14} />
        <OptimizedCache number={15} />

        {/* Section 2 */}
        <Section2Cover number={16} />
        <Section2Intro number={17} />
        <Section2Roadmap number={18} />
        <PrimitiveObsession number={19} />
        <NewTypePattern number={20} />
        <DerivingTraits number={21} />
        <TypeSafeCache number={22} />
        <SafetyVerification number={23} />

        {/* Section 3 */}
        <Section3Cover number={24} />
        <Section3Intro number={25} />
        <IntroducingGenerics number={26} />
        <TraitBounds number={27} />
        <GenericSyntax number={28} />
        <TheBorrowTrait number={29} />
        <GenericCacheImpl number={30} />
        <GenericTests number={31} />

        {/* Stage 4 */}
        <Section4Cover number={32} />
        <Stage4Roadmap number={33} />
        <IntroduceGetMut number={34} />
        <MutableScopeProblem number={35} />
        <AliasMutationError number={36} />
        <TheUpdateMethod number={37} />
        <UpdateImplCode number={38} />
        <UpdateTests number={39} />
        <MultipleUpdatesScope number={40} />
        <ClosureTraits number={41} />
        <InteriorMutabilityPath number={42} />

        {/* Stage 5 */}
        <Section5Cover number={43} />
        <Stage5Roadmap number={44} />
        <TheEntryStruct number={45} />
        <RefCellMethods number={46} />
        <CacheIntegration number={47} />
        <RuntimeBorrowProblem number={48} />
        <RuntimePanicError number={49} />

        {/* Stage 6 */}
        <Section6Cover number={50} />
        <Section6Intro number={51} />
        <ConcurrencyIntro number={52} />
        <CompilationError number={53} />
        <ThreadSafeWrapper number={54} />
        <RAIIGuards number={55} />
        <InnerLockingDrop number={56} />
        <TheDerefTrait number={57} />
        <TheUnwrapMystery number={58} />
        <TheBrokenGet number={59} />
        <OwnershipShift number={60} />
        <SafeCacheImpl number={61} />
        <ThreadSafeTests number={62} />

        {/* Stage 7 */}
        <Section7Cover number={63} />
        <Section7Intro number={64} />
        <TheCloningTax number={65} />
        <IntroducingArc number={66} />
        <ArcMechanics number={67} />
        <ArcInsideCache number={68} />
        <ArcDeref number={69} />
        <FinalArcImplementation number={70} />
        <ArcTests number={71} />

        {/* Stage 8 */}
        <Section8Cover number={72} />
        <Stage8Roadmap number={73} />
        <Section8Intro number={74} />
        <CustomRefPattern number={75} />
        <LifetimeAnchor number={76} />
        <ThePointerTrick number={77} />
        <UnsafeDeref number={78} />
        <LockTradeoff number={79} />
        <ZeroCopyTests number={80} />
        <Section8Summary number={81} />

        {/* Stage 9 */}
        <Section9Cover number={82} />
        <Stage9Roadmap number={83} />
        <BeyondScope number={84} />
        <TheOwnershipWall number={85} />
        <FoundationOfConcurrency number={86} />
        <SharedCacheArc number={87} />
        <SendAndSync number={88} />
        <FinalVerification number={89} />

        {/* Stage 10 */}
        <Section10Cover number={90} />
        <Stage10Roadmap number={91} />
        <LockContentionIntro number={92} />
        <ShardingDesign number={93} />
        <TheShardedStruct number={94} />
        <HashingAndIndexing number={95} />
        <ShardedImplementation number={96} />
        <ShardedAccess number={97} />
        <ShardedVerification number={98} />

        {/* Stage 11 */}
        <Section11Cover number={99} />
        <Stage11Roadmap number={100} />
        <TheStaleDataProblem number={101} />
        <TheShardAbstraction number={102} />
        <ShardPutCode number={103} />
        <ShardGetLazy number={104} />
        <ZeroCopyRefTTL number={105} />
        <CacheRefactorCode number={106} />
        <ContentionManagement number={107} />
        <ShardCleanupCode number={108} />
        <BackgroundCleanerAssignment number={109} />
        <BackgroundCleanerImpl number={110} />
        <NonCooperativeCleaner number={111} />

        {/* Stage 12 */}
        <Section12Cover number={112} />
        <Stage12Roadmap number={113} />
        <TheMetricsProblem number={114} />
        <LockBasedDesign number={115} />
        <AtomicsIntro number={116} />
        <MemoryHierarchy number={117} />
        <InstructionOptimization number={118} />
        <MemoryModelHappensBefore number={119} />
        <MemoryOrderingRelaxed number={120} />
        <MemoryOrderingAcqRel number={121} />
        <MemoryOrderingSeqCst number={122} />
        <ConcurrentStatsDesign number={123} />
        <MESIProtocol number={124} />
        <FalseSharingBad number={125} />
        <OptimizedConcurrentStats number={126} />

        {/* Stage 13 */}
        <Section13Cover number={127} />
        <Stage13Roadmap number={128} />
        <ShutdownIntro number={129} />
        <NaiveApproach number={130} />
        <OwnershipTermination number={131} />
        <TypeStateConcept number={132} />
        <CompilerAsGuard number={133} />
        <Section13Summary number={134} />

        {/* Stage 14 */}
        <Section14Cover number={135} />
        <Stage14Roadmap number={136} />
        <TheBuilderPattern number={137} />
        <CacheBuilderImpl number={138} />
        <IntegrationTestingIntro number={139} />
        <CacheIntegrationTest number={140} />
        <WorkshopConclusion number={141} />
      </HTMLFlipBook>

      <div className="controls">
        <button onClick={() => nextPrevPage('prev')}>Previous Page</button>
        <button onClick={() => nextPrevPage('next')}>Next Page</button>
      </div>
    </div>
  );
};

export default Book;

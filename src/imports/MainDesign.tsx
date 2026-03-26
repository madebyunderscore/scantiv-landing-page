import svgPaths from "./svg-1hdib5ybbz";

function IconContainer() {
  return (
    <div className="relative shrink-0 size-[56px]" data-name="Icon Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
        <g id="Icon Container">
          <rect fill="var(--fill-0, #0F0906)" height="56" rx="16" width="56" />
          <path d={svgPaths.pa4a0100} fill="url(#paint0_linear_1_497)" id="S (Stroke)" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_497" x1="28.4082" x2="28.4082" y1="9" y2="46.6367">
            <stop stopColor="white" />
            <stop offset="0.75" stopColor="#0D7C6B" />
            <stop offset="1" stopColor="#09584C" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function DescriptionContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Description Container">
      <p className="font-['Suisse_Int'l:Medium',sans-serif] leading-[44.16px] relative shrink-0 text-[#0f0906] text-[36.8px] w-full">Know where AI finds you.</p>
      <p className="font-['Suisse_Int'l:Regular',sans-serif] leading-[33.6px] relative shrink-0 text-[#b49c8b] text-[24px] w-full">Get a fully actionable plan to improve your business AI search visibility at 9x lower costs of a full fledge GEO agency</p>
    </div>
  );
}

function ButtonsContainer() {
  return (
    <div className="content-stretch flex gap-[13px] items-center relative shrink-0" data-name="Buttons Container">
      <div className="bg-[#0d7c6b] content-stretch flex items-center justify-center px-[19.2px] py-[11.2px] relative rounded-[8px] shrink-0" data-name="btn">
        <p className="font-['Suisse_Int'l:Medium',sans-serif] leading-[20.8px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Get GEO Audit at S$99</p>
      </div>
      <div className="content-stretch flex items-center justify-center px-[19.2px] py-[11.2px] relative rounded-[8px] shrink-0" data-name="btn">
        <div aria-hidden="true" className="absolute border border-[#0d7c6b] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <p className="font-['Suisse_Int'l:Medium',sans-serif] leading-[20.8px] not-italic relative shrink-0 text-[#0f0906] text-[16px] whitespace-nowrap">View Sample Report</p>
      </div>
    </div>
  );
}

function TaglineContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[620px]" data-name="Tagline Container">
      <IconContainer />
      <DescriptionContainer />
      <ButtonsContainer />
    </div>
  );
}

function CardItem() {
  return (
    <div className="bg-[#b49c8b] content-stretch flex flex-col h-[320px] items-start justify-between overflow-clip p-[16px] relative rounded-[16px] w-[225px]" data-name="Card Item">
      <div className="bg-[#d9d9d9] h-[80px] shrink-0 w-full" data-name="Card Image" />
      <p className="font-['Suisse_Int'l:Medium',sans-serif] leading-[33.6px] not-italic relative shrink-0 text-[#0f0906] text-[24px] w-full">Works for any website or platform</p>
    </div>
  );
}

function CardItem1() {
  return (
    <div className="bg-[#d97706] content-stretch flex flex-col h-[320px] items-start justify-between overflow-clip p-[16px] relative rounded-[16px] w-[225px]" data-name="Card Item">
      <div className="bg-[#d9d9d9] h-[80px] shrink-0 w-full" data-name="Card Image" />
      <p className="font-['Suisse_Int'l:Medium',sans-serif] leading-[33.6px] not-italic relative shrink-0 text-[#0f0906] text-[24px] w-full">Actionables written for founders, not developers</p>
    </div>
  );
}

function CardItem2() {
  return (
    <div className="bg-[#0d7c6b] content-stretch flex flex-col h-[320px] items-start justify-between overflow-clip p-[16px] relative rounded-[16px] w-[225px]" data-name="Card Item">
      <div className="bg-[#d9d9d9] h-[80px] shrink-0 w-full" data-name="Card Image" />
      <p className="font-['Suisse_Int'l:Medium',sans-serif] leading-[33.6px] not-italic relative shrink-0 text-[#0f0906] text-[24px] w-full">Full GEO report in 24 hours</p>
    </div>
  );
}

function CardItem3() {
  return (
    <div className="bg-[#0f0906] content-stretch flex flex-col h-[320px] items-start justify-between overflow-clip p-[16px] relative rounded-[16px] w-[225px]" data-name="Card Item">
      <div className="bg-[#d9d9d9] h-[80px] shrink-0 w-full" data-name="Card Image" />
      <p className="font-['Suisse_Int'l:Medium',sans-serif] leading-[33.6px] not-italic relative shrink-0 text-[#fdf9f4] text-[24px] w-full">No subscription. Pay once.</p>
    </div>
  );
}

function CardItems() {
  return (
    <div className="absolute contents left-[65.5px] top-[-27.4px]" data-name="Card Items">
      <div className="absolute flex h-[370.187px] items-center justify-center left-[65.5px] top-[-23.24px] w-[305.575px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "18" } as React.CSSProperties}>
        <div className="flex-none rotate-[-16.25deg]">
          <CardItem />
        </div>
      </div>
      <div className="absolute flex h-[341.067px] items-center justify-center left-[274.43px] top-[-10.53px] w-[256.136px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "18" } as React.CSSProperties}>
        <div className="flex-none rotate-[5.79deg]">
          <CardItem1 />
        </div>
      </div>
      <div className="absolute flex h-[346.31px] items-center justify-center left-[467.83px] top-[-27.4px] w-[264.335px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "18" } as React.CSSProperties}>
        <div className="flex-none rotate-[-7.4deg]">
          <CardItem2 />
        </div>
      </div>
      <div className="absolute flex h-[346.951px] items-center justify-center left-[667.32px] top-[-13.88px] w-[265.353px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "18" } as React.CSSProperties}>
        <div className="flex-none rotate-[7.6deg]">
          <CardItem3 />
        </div>
      </div>
    </div>
  );
}

function CardsWrapper() {
  return (
    <div className="h-[320px] relative shrink-0 w-[999px]" data-name="Cards Wrapper">
      <CardItems />
    </div>
  );
}

function CardsContainer() {
  return (
    <div className="content-stretch flex flex-col items-start py-[120px] relative shrink-0" data-name="Cards Container">
      <CardsWrapper />
    </div>
  );
}

function SealCheck() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SealCheck">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SealCheck">
          <path d={svgPaths.p3e1def00} fill="var(--fill-0, #0D7C6B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function FooterItem() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Footer Item">
      <SealCheck />
      <p className="font-['Suisse_Int'l:Regular',sans-serif] leading-[21.6px] not-italic relative shrink-0 text-[#644d3f] text-[14.4px] whitespace-nowrap">Expert-reviewed before delivery.</p>
    </div>
  );
}

function Eyes() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Eyes">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Eyes">
          <path d={svgPaths.p1f2f7d40} fill="var(--fill-0, #0D7C6B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function FooterItem1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Footer Item">
      <Eyes />
      <p className="font-['Suisse_Int'l:Regular',sans-serif] leading-[21.6px] not-italic relative shrink-0 text-[#644d3f] text-[14.4px] whitespace-nowrap">Flat fees. No hidden fees.</p>
    </div>
  );
}

function Rewind() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Rewind">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Rewind">
          <path d={svgPaths.pd0f0800} fill="var(--fill-0, #0D7C6B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function FooterItem2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Footer Item">
      <Rewind />
      <p className="font-['Suisse_Int'l:Regular',sans-serif] leading-[21.6px] not-italic relative shrink-0 text-[#644d3f] text-[14.4px] whitespace-nowrap">Free revision within 7 days.</p>
    </div>
  );
}

function FooterContainer() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Footer Container">
      <FooterItem />
      <FooterItem1 />
      <FooterItem2 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <TaglineContainer />
      <CardsContainer />
      <FooterContainer />
    </div>
  );
}

function Hero() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip px-[300px] py-[72px] relative shrink-0 w-[1440px]" data-name="Hero">
      <Container />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[33.6px] not-italic relative shrink-0 text-[24px] w-[619px]">
      <p className="font-['Suisse_Int'l:Medium',sans-serif] relative shrink-0 text-[#0f0906] w-full">Every day, customers are asking AI tools which business offers the best service or products.</p>
      <p className="font-['Suisse_Int'l:Regular',sans-serif] relative shrink-0 text-[#b49c8b] w-full">{`ChatGPT? Claude? Gemini? Most Singapore business owners have no idea which side of that line they're on. This is where many landed up to be.`}</p>
    </div>
  );
}

function Alarm() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Alarm">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Alarm">
          <path d={svgPaths.p37253a80} fill="var(--fill-0, #0D7C6B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-[16px] w-full">
      <p className="font-['Suisse_Int'l:Medium',sans-serif] leading-[22.4px] relative shrink-0 text-[#0f0906] whitespace-nowrap">Time Constrained</p>
      <p className="font-['Suisse_Int'l:Regular',sans-serif] leading-[25.6px] min-w-full relative shrink-0 text-[#856b5a] w-[min-content]">You are the CEO - Chief of Everything. Everything requires your attention and last thing on your mind is “how do I manage these new AI channels now”</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-start p-[24px] relative size-full">
          <Alarm />
          <Frame5 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#0d7c6b] border-dashed border-r inset-0 pointer-events-none" />
    </div>
  );
}

function SmileyMelting() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SmileyMelting">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SmileyMelting">
          <path d={svgPaths.p3bb6ea80} fill="var(--fill-0, #0D7C6B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-[16px] w-full">
      <p className="font-['Suisse_Int'l:Medium',sans-serif] leading-[22.4px] relative shrink-0 text-[#0f0906] whitespace-nowrap">Getting Overwhelmed</p>
      <p className="font-['Suisse_Int'l:Regular',sans-serif] leading-[25.6px] min-w-full relative shrink-0 text-[#856b5a] w-[min-content]">You read about it, got a free audit from Second Book agency, now you’re left alone. AI Visibility score? More like AI Confusion score.</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-start p-[24px] relative size-full">
          <SmileyMelting />
          <Frame6 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#0d7c6b] border-dashed border-r inset-0 pointer-events-none" />
    </div>
  );
}

function TipJar() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="TipJar">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="TipJar">
          <path d={svgPaths.p2fc1370} fill="var(--fill-0, #0D7C6B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-[16px] w-full">
      <p className="font-['Suisse_Int'l:Medium',sans-serif] leading-[22.4px] relative shrink-0 text-[#0f0906] whitespace-nowrap">Budget Constrained</p>
      <p className="font-['Suisse_Int'l:Regular',sans-serif] leading-[25.6px] min-w-full relative shrink-0 text-[#856b5a] w-[min-content]">Your already allocated $500/mo for that social media agency and $200/mo for that freelance web dev. Now you’re left with $0 for growth on AI</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-start p-[24px] relative size-full">
          <TipJar />
          <Frame7 />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-[233px] relative rounded-[8px] shrink-0 w-full">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <Frame2 />
        <Frame3 />
        <Frame4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ede3d8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full">
      <Frame52 />
      <Frame1 />
    </div>
  );
}

function ProblemSpace() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip px-[300px] py-[72px] relative shrink-0 w-[1440px]" data-name="Problem Space">
      <Frame53 />
    </div>
  );
}

function CaretLeft() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="CaretLeft">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="CaretLeft">
          <path d={svgPaths.p31cc9880} fill="var(--fill-0, #0D7C6B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-white opacity-50 overflow-clip relative rounded-[999999px] shrink-0 size-[32px]">
      <CaretLeft />
    </div>
  );
}

function CaretRight() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="CaretRight">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="CaretRight">
          <path d={svgPaths.p16897c00} fill="var(--fill-0, #0D7C6B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-white overflow-clip relative rounded-[999999px] shrink-0 size-[32px]">
      <CaretRight />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame11 />
      <Frame10 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-[620px]">
      <p className="font-['Suisse_Int'l:Medium',sans-serif] leading-[33.6px] not-italic relative shrink-0 text-[#0f0906] text-[24px] w-[400px]">Scantiv tells you exactly where you stand and what to fix first.</p>
      <Frame12 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 w-full">
      <p className="font-['Suisse_Int'l:Regular',sans-serif] leading-[21.6px] relative shrink-0 text-[#b49c8b] text-[14.4px] whitespace-nowrap">Time Constrained</p>
      <p className="font-['Suisse_Int'l:Medium',sans-serif] leading-[22.4px] relative shrink-0 text-[#0f0906] text-[16px] whitespace-nowrap">One Clear Score</p>
      <p className="font-['Suisse_Int'l:Regular',sans-serif] leading-[25.6px] min-w-full relative shrink-0 text-[#856b5a] text-[16px] w-[min-content]">A composite GEO Score from 0 to 100 — one number that captures your full AI search visibility. No raw data to decipher. No dashboard to learn.</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0 w-[400px]">
      <div className="bg-[#d9d9d9] h-[200px] shrink-0 w-full" />
      <Frame13 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 w-full">
      <p className="font-['Suisse_Int'l:Regular',sans-serif] leading-[21.6px] relative shrink-0 text-[#b49c8b] text-[14.4px] whitespace-nowrap">Time Constrained</p>
      <p className="font-['Suisse_Int'l:Medium',sans-serif] leading-[22.4px] relative shrink-0 text-[#0f0906] text-[16px] whitespace-nowrap">A prioritised action plan</p>
      <p className="font-['Suisse_Int'l:Regular',sans-serif] leading-[25.6px] min-w-full relative shrink-0 text-[#856b5a] text-[16px] w-[min-content]">{`Every finding comes with a plain-language fix. Ordered by impact. Written for a business owner, not a developer. You know what to do next before you finish `}</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0 w-[400px]">
      <div className="bg-[#d9d9d9] h-[200px] shrink-0 w-full" />
      <Frame15 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 w-full">
      <p className="font-['Suisse_Int'l:Regular',sans-serif] leading-[21.6px] relative shrink-0 text-[#b49c8b] text-[14.4px] whitespace-nowrap">Time Constrained</p>
      <p className="font-['Suisse_Int'l:Medium',sans-serif] leading-[22.4px] relative shrink-0 text-[#0f0906] text-[16px] whitespace-nowrap">Expert interpretation, not automation</p>
      <p className="font-['Suisse_Int'l:Regular',sans-serif] leading-[25.6px] min-w-full relative shrink-0 text-[#856b5a] text-[16px] w-[min-content]">Every Scantiv audit is conducted by AI and reviewed by a GEO practitioner. Every report reflects human judgement, not an algorithm guessing at priorities.</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0 w-[400px]">
      <div className="bg-[#d9d9d9] h-[200px] shrink-0 w-full" />
      <Frame17 />
    </div>
  );
}

function Panel() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-start left-0 overflow-clip top-0 w-[1232px]" data-name="Panel">
      <Frame8 />
      <Frame14 />
      <Frame16 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="h-[340px] overflow-x-auto overflow-y-clip relative shrink-0 w-full">
      <Panel />
    </div>
  );
}

function ChartBar() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ChartBar">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ChartBar">
          <path d={svgPaths.p33b23600} fill="var(--fill-0, #0D7C6B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 text-[16px] w-full">
      <p className="font-['Suisse_Int'l:Medium',sans-serif] leading-[22.4px] relative shrink-0 text-[#0f0906] whitespace-nowrap">AI Citability Score</p>
      <p className="font-['Suisse_Int'l:Regular',sans-serif] leading-[25.6px] min-w-full relative shrink-0 text-[#856b5a] w-[min-content]">How likely AI models are to cite or reference your content when answering queries.</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[8px] items-start overflow-clip relative row-1 self-start shrink-0 w-[290px]">
      <ChartBar />
      <Frame20 />
    </div>
  );
}

function AppleLogo() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="AppleLogo">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_436)" id="AppleLogo">
          <path d={svgPaths.p158bd000} fill="var(--fill-0, #0D7C6B)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_436">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 text-[16px] w-full">
      <p className="font-['Suisse_Int'l:Medium',sans-serif] leading-[22.4px] relative shrink-0 text-[#0f0906] whitespace-nowrap">Brand Presence Across AI Platforms</p>
      <p className="font-['Suisse_Int'l:Regular',sans-serif] leading-[25.6px] min-w-full relative shrink-0 text-[#856b5a] w-[min-content]">How your brand is recognised and represented across AI search tools and citation sources.</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[8px] items-start overflow-clip relative row-3 self-start shrink-0 w-[290px]">
      <AppleLogo />
      <Frame22 />
    </div>
  );
}

function Code() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Code">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Code">
          <path d={svgPaths.p343e75f0} fill="var(--fill-0, #0D7C6B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 text-[16px] w-full">
      <p className="font-['Suisse_Int'l:Medium',sans-serif] leading-[22.4px] relative shrink-0 text-[#0f0906] whitespace-nowrap">Technical SEO for AI Crawlers</p>
      <p className="font-['Suisse_Int'l:Regular',sans-serif] leading-[25.6px] min-w-full relative shrink-0 text-[#856b5a] w-[min-content]">Whether AI bots can access, crawl, and index your site correctly.</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[8px] items-start overflow-clip relative row-2 self-start shrink-0 w-[290px]">
      <Code />
      <Frame24 />
    </div>
  );
}

function Rss() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Rss">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Rss">
          <path d={svgPaths.p5522dc0} fill="var(--fill-0, #0D7C6B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 text-[16px] w-full">
      <p className="font-['Suisse_Int'l:Medium',sans-serif] leading-[22.4px] relative shrink-0 text-[#0f0906] whitespace-nowrap">E-E-A-T Signals</p>
      <p className="font-['Suisse_Int'l:Regular',sans-serif] leading-[25.6px] min-w-full relative shrink-0 text-[#856b5a] w-[min-content]">How likely AI models are to cite or reference your content when answering queries.</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[8px] items-start overflow-clip relative row-1 self-start shrink-0 w-[290px]">
      <Rss />
      <Frame26 />
    </div>
  );
}

function TreeStructure() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="TreeStructure">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="TreeStructure">
          <path d={svgPaths.p30b57400} fill="var(--fill-0, #0D7C6B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 text-[16px] w-full">
      <p className="font-['Suisse_Int'l:Medium',sans-serif] leading-[22.4px] relative shrink-0 text-[#0f0906] whitespace-nowrap">{`Schema Markup & Structured Data`}</p>
      <p className="font-['Suisse_Int'l:Regular',sans-serif] leading-[25.6px] min-w-full relative shrink-0 text-[#856b5a] w-[min-content]">Whether AI bots can access, crawl, and index your site correctly.</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[8px] items-start overflow-clip relative row-2 self-start shrink-0 w-[290px]">
      <TreeStructure />
      <Frame28 />
    </div>
  );
}

function Robot() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Robot">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Robot">
          <path d={svgPaths.p355a2800} fill="var(--fill-0, #0D7C6B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 text-[16px] w-full">
      <p className="font-['Suisse_Int'l:Medium',sans-serif] leading-[22.4px] relative shrink-0 text-[#0f0906] whitespace-nowrap">Platform Readiness</p>
      <p className="font-['Suisse_Int'l:Regular',sans-serif] leading-[25.6px] min-w-full relative shrink-0 text-[#856b5a] w-[min-content]">Readiness across ChatGPT, Perplexity, Google AI Overviews, Gemini, and Bing Copilot — the five platforms most likely to surface your business to potential customers.</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[8px] items-start overflow-clip relative row-3 self-start shrink-0 w-[290px]">
      <Robot />
      <Frame30 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="gap-x-[40px] gap-y-[40px] grid grid-cols-[repeat(2,fit-content(100%))] grid-rows-[repeat(3,fit-content(100%))] relative shrink-0 w-full">
      <Frame19 />
      <Frame21 />
      <Frame23 />
      <Frame25 />
      <Frame27 />
      <Frame29 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[620px]">
      <p className="font-['Suisse_Int'l:Regular',sans-serif] leading-[30px] not-italic relative shrink-0 text-[#856b5a] text-[20px] w-full">A complete audit across every major AI search signal.</p>
      <Frame18 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-[840px]">
      <Frame49 />
      <Frame9 />
      <div className="h-0 relative shrink-0 w-[620px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 620 1">
            <line id="Line 1" stroke="var(--stroke-0, #0D7C6B)" strokeDasharray="1 8" x2="620" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame50 />
    </div>
  );
}

function Features() {
  return (
    <div className="content-stretch flex items-center overflow-clip px-[300px] py-[72px] relative shrink-0" data-name="Features">
      <Frame51 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[33.6px] not-italic relative shrink-0 text-[24px] w-full">
      <p className="font-['Suisse_Int'l:Medium',sans-serif] relative shrink-0 text-[#0f0906] w-full">{`See exactly what you're getting before you pay.`}</p>
      <p className="font-['Suisse_Int'l:Regular',sans-serif] relative shrink-0 text-[#b49c8b] w-full">You will receive a professional PDF delivered to your inbox within 24 hours.</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 text-[16px] w-full">
      <p className="font-['Suisse_Int'l:Medium',sans-serif] leading-[22.4px] relative shrink-0 text-[#0f0906] whitespace-nowrap">GEO Audit PDF</p>
      <p className="font-['Suisse_Int'l:Regular',sans-serif] leading-[25.6px] min-w-full relative shrink-0 text-[#b49c8b] w-[min-content]">The preview is based on a real audit anonymised for confidentiality. What you receive looks identical to this, personalised to your business.</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative size-full">
        <div className="relative shrink-0 size-[22px]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
            <g id="Vector">
              <path d={svgPaths.p20264200} fill="#0F0906" />
              <path d={svgPaths.p5ebcf00} fill="url(#paint0_linear_1_457)" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_457" x1="11.1604" x2="11.1604" y1="3.53571" y2="18.3216">
                <stop stopColor="white" />
                <stop offset="0.75" stopColor="#0D7C6B" />
                <stop offset="1" stopColor="#09584C" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <Frame33 />
        <div className="content-stretch flex items-center justify-center px-[19.2px] py-[11.2px] relative rounded-[8px] shrink-0" data-name="btn">
          <div aria-hidden="true" className="absolute border border-[#0d7c6b] border-solid inset-0 pointer-events-none rounded-[8px]" />
          <p className="font-['Suisse_Int'l:Medium',sans-serif] leading-[20.8px] not-italic relative shrink-0 text-[#0f0906] text-[16px] whitespace-nowrap">Preview PDF</p>
        </div>
      </div>
    </div>
  );
}

function Frame34() {
  return <div className="bg-[#d9d9d9] flex-[1_0_0] min-h-px min-w-px self-stretch" />;
}

function Frame31() {
  return (
    <div className="h-[275.4px] relative rounded-[16px] shrink-0 w-full">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <Frame32 />
        <Frame34 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ede3d8] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <Frame47 />
      <Frame31 />
    </div>
  );
}

function SampleReport() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip px-[410px] py-[72px] relative shrink-0 w-[1440px]" data-name="Sample Report">
      <Frame48 />
    </div>
  );
}

function DescriptionContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[33.6px] not-italic relative shrink-0 text-[24px] w-[620px]" data-name="Description Container">
      <p className="font-['Suisse_Int'l:Medium',sans-serif] relative shrink-0 text-[#0f0906] w-full">How it works</p>
      <p className="font-['Suisse_Int'l:Regular',sans-serif] relative shrink-0 text-[#b49c8b] w-full">Get your AI search score in 24 hours without monthly fees or renewal contract. Personalised and customised based on your business.</p>
    </div>
  );
}

function ShoppingCart() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ShoppingCart">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ShoppingCart">
          <path d={svgPaths.p1021580} fill="var(--fill-0, #0D7C6B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function StepDetails() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-[16px] w-full" data-name="Step Details">
      <p className="font-['Suisse_Int'l:Medium',sans-serif] leading-[22.4px] relative shrink-0 text-[#0f0906] whitespace-nowrap">Pay online</p>
      <p className="font-['Suisse_Int'l:Regular',sans-serif] leading-[25.6px] min-w-full relative shrink-0 text-[#856b5a] w-[min-content]">One-time payment. SGD 99 for the report, SGD 299 to include a 60-minute strategy call. No subscription. No upsell.</p>
    </div>
  );
}

function StepOne() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Step One">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-start p-[24px] relative size-full">
          <ShoppingCart />
          <StepDetails />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#0d7c6b] border-dashed border-r inset-0 pointer-events-none" />
    </div>
  );
}

function Scroll() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Scroll">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Scroll">
          <path d={svgPaths.pee6d580} fill="var(--fill-0, #0D7C6B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function StepDetails1() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-[16px] w-full" data-name="Step Details">
      <p className="font-['Suisse_Int'l:Medium',sans-serif] leading-[22.4px] relative shrink-0 text-[#0f0906] whitespace-nowrap">Fill a short form</p>
      <p className="font-['Suisse_Int'l:Regular',sans-serif] leading-[25.6px] min-w-full relative shrink-0 text-[#856b5a] w-[min-content]">Five minutes. Your website URL and a few details about your business. We handle everything else.</p>
    </div>
  );
}

function StepTwo() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Step Two">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-start p-[24px] relative size-full">
          <Scroll />
          <StepDetails1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#0d7c6b] border-dashed border-r inset-0 pointer-events-none" />
    </div>
  );
}

function PaperPlaneTilt() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="PaperPlaneTilt">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="PaperPlaneTilt">
          <path d={svgPaths.p32c40500} fill="var(--fill-0, #0D7C6B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function StepDetails2() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-[16px] w-full" data-name="Step Details">
      <p className="font-['Suisse_Int'l:Medium',sans-serif] leading-[22.4px] relative shrink-0 text-[#0f0906] whitespace-nowrap">Receive your report</p>
      <p className="font-['Suisse_Int'l:Regular',sans-serif] leading-[25.6px] min-w-full relative shrink-0 text-[#856b5a] w-[min-content]">A professional PDF in your inbox within 24 hours. Your GEO Score, category breakdown, and prioritised action plan.</p>
    </div>
  );
}

function StepThree() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Step Three">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-start p-[24px] relative size-full">
          <PaperPlaneTilt />
          <StepDetails2 />
        </div>
      </div>
    </div>
  );
}

function StepsContainer() {
  return (
    <div className="h-[233px] relative rounded-[8px] shrink-0 w-full" data-name="Steps Container">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <StepOne />
        <StepTwo />
        <StepThree />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ede3d8] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ContentWrapper() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full" data-name="Content Wrapper">
      <DescriptionContainer1 />
      <StepsContainer />
    </div>
  );
}

function HowItWorks() {
  return (
    <div className="relative shrink-0 w-full" data-name="How It Works">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[300px] py-[72px] relative w-full">
          <ContentWrapper />
        </div>
      </div>
    </div>
  );
}

function PricingHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[33.6px] not-italic relative shrink-0 text-[24px] w-full" data-name="Pricing Header">
      <p className="font-['Suisse_Int'l:Medium',sans-serif] relative shrink-0 text-[#0f0906] w-full">Pricing</p>
      <p className="font-['Suisse_Int'l:Regular',sans-serif] relative shrink-0 text-[#b49c8b] w-full">One-time. No retainer. No subscription.</p>
    </div>
  );
}

function PriceInfo() {
  return (
    <div className="content-stretch flex font-['Suisse_Int'l:Medium',sans-serif] gap-[8px] items-baseline relative shrink-0 whitespace-nowrap" data-name="Price Info">
      <p className="leading-[44.16px] relative shrink-0 text-[#0f0906] text-[36.8px]">SGD 99</p>
      <p className="[text-decoration-skip-ink:none] decoration-solid leading-[33.6px] line-through relative shrink-0 text-[#b49c8b] text-[24px]">SGD 199</p>
    </div>
  );
}

function PlanHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-[571px]" data-name="Plan Header">
      <p className="font-['Suisse_Int'l:Medium',sans-serif] leading-[26.88px] relative shrink-0 text-[#644d3f] text-[19.2px] whitespace-nowrap">GEO Audit Report</p>
      <PriceInfo />
      <p className="font-['Suisse_Int'l:Regular',sans-serif] leading-[25.6px] min-w-full relative shrink-0 text-[#644d3f] text-[16px] w-[min-content]">For business owners who want to improve their AI search but have limited knowledge or budget to hire an external agency.</p>
    </div>
  );
}

function Check() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Check">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Check">
          <path d={svgPaths.p27b90280} fill="var(--fill-0, #856B5A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function FeatureItem() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Feature Item">
      <Check />
      <p className="flex-[1_0_0] font-['Suisse_Int'l:Regular',sans-serif] leading-[25.6px] min-h-px min-w-px not-italic relative text-[#856b5a] text-[16px]">Full GEO audit across all AI search signals</p>
    </div>
  );
}

function Check1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Check">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Check">
          <path d={svgPaths.p27b90280} fill="var(--fill-0, #856B5A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function FeatureItem1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Feature Item">
      <Check1 />
      <p className="flex-[1_0_0] font-['Suisse_Int'l:Regular',sans-serif] leading-[25.6px] min-h-px min-w-px not-italic relative text-[#856b5a] text-[16px]">Composite GEO Score (0–100)</p>
    </div>
  );
}

function Check2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Check">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Check">
          <path d={svgPaths.p27b90280} fill="var(--fill-0, #856B5A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function FeatureItem2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Feature Item">
      <Check2 />
      <p className="flex-[1_0_0] font-['Suisse_Int'l:Regular',sans-serif] leading-[25.6px] min-h-px min-w-px not-italic relative text-[#856b5a] text-[16px]">Prioritised action plan</p>
    </div>
  );
}

function Check3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Check">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Check">
          <path d={svgPaths.p27b90280} fill="var(--fill-0, #856B5A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function FeatureItem3() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Feature Item">
      <Check3 />
      <p className="flex-[1_0_0] font-['Suisse_Int'l:Regular',sans-serif] leading-[25.6px] min-h-px min-w-px not-italic relative text-[#856b5a] text-[16px]">Works for any web platform you are on</p>
    </div>
  );
}

function Check4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Check">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Check">
          <path d={svgPaths.p27b90280} fill="var(--fill-0, #856B5A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function FeatureItem4() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Feature Item">
      <Check4 />
      <p className="flex-[1_0_0] font-['Suisse_Int'l:Regular',sans-serif] leading-[25.6px] min-h-px min-w-px not-italic relative text-[#856b5a] text-[16px]">PDF report within 24 hours</p>
    </div>
  );
}

function Check5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Check">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Check">
          <path d={svgPaths.p27b90280} fill="var(--fill-0, #856B5A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function FeatureItem5() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Feature Item">
      <Check5 />
      <p className="flex-[1_0_0] font-['Suisse_Int'l:Regular',sans-serif] leading-[25.6px] min-h-px min-w-px not-italic relative text-[#856b5a] text-[16px]">Customised to your industry and customer</p>
    </div>
  );
}

function FeaturesList() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[571px]" data-name="Features List">
      <FeatureItem />
      <FeatureItem1 />
      <FeatureItem2 />
      <FeatureItem3 />
      <FeatureItem4 />
      <FeatureItem5 />
    </div>
  );
}

function PlanCard() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="Plan Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-full">
          <PlanHeader />
          <FeaturesList />
          <div className="bg-[#0d7c6b] content-stretch flex items-center justify-center px-[19.2px] py-[11.2px] relative rounded-[8px] shrink-0" data-name="btn">
            <p className="font-['Suisse_Int'l:Medium',sans-serif] leading-[20.8px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Get GEO Audit at S$99</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ede3d8] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function PriceInfo1() {
  return (
    <div className="content-stretch flex font-['Suisse_Int'l:Medium',sans-serif] gap-[8px] items-baseline relative shrink-0 whitespace-nowrap" data-name="Price Info">
      <p className="leading-[44.16px] relative shrink-0 text-[#0f0906] text-[36.8px]">SGD 299</p>
      <p className="[text-decoration-skip-ink:none] decoration-solid leading-[33.6px] line-through relative shrink-0 text-[#b49c8b] text-[24px]">SGD 499</p>
    </div>
  );
}

function PlanHeader1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-[571px]" data-name="Plan Header">
      <p className="font-['Suisse_Int'l:Medium',sans-serif] leading-[26.88px] relative shrink-0 text-[#644d3f] text-[19.2px] whitespace-nowrap">GEO Audit Report + Strategy Call</p>
      <PriceInfo1 />
      <p className="font-['Suisse_Int'l:Regular',sans-serif] leading-[25.6px] min-w-full relative shrink-0 text-[#644d3f] text-[16px] w-[min-content]">For business owners who have a little bit more budget to spend and wants a GEO specialist to talk about the strategy and latest insights in GEO.</p>
    </div>
  );
}

function Check6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Check">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Check">
          <path d={svgPaths.p27b90280} fill="var(--fill-0, #856B5A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function FeatureItem6() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Feature Item">
      <Check6 />
      <p className="flex-[1_0_0] font-['Suisse_Int'l:Regular',sans-serif] leading-[25.6px] min-h-px min-w-px not-italic relative text-[#856b5a] text-[16px]">Full GEO audit across all AI search signals</p>
    </div>
  );
}

function Check7() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Check">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Check">
          <path d={svgPaths.p27b90280} fill="var(--fill-0, #856B5A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function FeatureItem7() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Feature Item">
      <Check7 />
      <p className="flex-[1_0_0] font-['Suisse_Int'l:Regular',sans-serif] leading-[25.6px] min-h-px min-w-px not-italic relative text-[#856b5a] text-[16px]">Composite GEO Score (0–100)</p>
    </div>
  );
}

function Check8() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Check">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Check">
          <path d={svgPaths.p27b90280} fill="var(--fill-0, #856B5A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function FeatureItem8() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Feature Item">
      <Check8 />
      <p className="flex-[1_0_0] font-['Suisse_Int'l:Regular',sans-serif] leading-[25.6px] min-h-px min-w-px not-italic relative text-[#856b5a] text-[16px]">Prioritised action plan</p>
    </div>
  );
}

function Check9() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Check">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Check">
          <path d={svgPaths.p27b90280} fill="var(--fill-0, #856B5A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function FeatureItem9() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Feature Item">
      <Check9 />
      <p className="flex-[1_0_0] font-['Suisse_Int'l:Regular',sans-serif] leading-[25.6px] min-h-px min-w-px not-italic relative text-[#856b5a] text-[16px]">Works for any web platform you are on</p>
    </div>
  );
}

function Check10() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Check">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Check">
          <path d={svgPaths.p27b90280} fill="var(--fill-0, #856B5A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function FeatureItem10() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Feature Item">
      <Check10 />
      <p className="flex-[1_0_0] font-['Suisse_Int'l:Regular',sans-serif] leading-[25.6px] min-h-px min-w-px not-italic relative text-[#856b5a] text-[16px]">PDF report within 24 hours</p>
    </div>
  );
}

function Check11() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Check">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Check">
          <path d={svgPaths.p27b90280} fill="var(--fill-0, #856B5A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function FeatureItem11() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Feature Item">
      <Check11 />
      <p className="flex-[1_0_0] font-['Suisse_Int'l:Regular',sans-serif] leading-[25.6px] min-h-px min-w-px not-italic relative text-[#856b5a] text-[16px]">Customised to your industry and customer</p>
    </div>
  );
}

function PlusSquare() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="PlusSquare">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="PlusSquare">
          <path d={svgPaths.p19cd4200} fill="var(--fill-0, #856B5A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function FeatureItem12() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Feature Item">
      <PlusSquare />
      <p className="flex-[1_0_0] font-['Suisse_Int'l:Regular',sans-serif] leading-[25.6px] min-h-px min-w-px not-italic relative text-[#856b5a] text-[16px]">60-minute strategy call with a GEO specialist</p>
    </div>
  );
}

function PlusSquare1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="PlusSquare">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="PlusSquare">
          <path d={svgPaths.p19cd4200} fill="var(--fill-0, #856B5A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function FeatureItem13() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Feature Item">
      <PlusSquare1 />
      <p className="flex-[1_0_0] font-['Suisse_Int'l:Regular',sans-serif] leading-[25.6px] min-h-px min-w-px not-italic relative text-[#856b5a] text-[16px]">Call recording included</p>
    </div>
  );
}

function FeaturesList1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[571px]" data-name="Features List">
      <FeatureItem6 />
      <FeatureItem7 />
      <FeatureItem8 />
      <FeatureItem9 />
      <FeatureItem10 />
      <FeatureItem11 />
      <FeatureItem12 />
      <FeatureItem13 />
    </div>
  );
}

function PlanCard1() {
  return (
    <div className="bg-[#f9f0e6] relative rounded-[16px] shrink-0 w-full" data-name="Plan Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-full">
          <PlanHeader1 />
          <FeaturesList1 />
          <div className="content-stretch flex items-center justify-center px-[19.2px] py-[11.2px] relative rounded-[8px] shrink-0" data-name="btn">
            <div aria-hidden="true" className="absolute border border-[#0d7c6b] border-solid inset-0 pointer-events-none rounded-[8px]" />
            <p className="font-['Suisse_Int'l:Medium',sans-serif] leading-[20.8px] not-italic relative shrink-0 text-[#0f0906] text-[16px] whitespace-nowrap">Get GEO + Strategy Call</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ede3d8] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function PlanDetails() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Plan Details">
      <PlanCard />
      <PlanCard1 />
    </div>
  );
}

function PricingCard() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[620px]" data-name="Pricing Card">
      <PricingHeader />
      <PlanDetails />
    </div>
  );
}

function PricingSection() {
  return (
    <div className="relative shrink-0 w-full" data-name="Pricing Section">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[410px] py-[72px] relative w-full">
          <PricingCard />
        </div>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative">
      <p className="font-['Suisse_Int'l:Medium',sans-serif] leading-[22.4px] not-italic relative shrink-0 text-[#0f0906] text-[16px] w-full">What is a GEO audit, and how is it different from an SEO audit?</p>
    </div>
  );
}

function Minus() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Minus">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Minus">
          <path d={svgPaths.p2a87ddc0} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Frame38 />
      <Minus />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start py-[24px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#0d7c6b] border-b border-dashed inset-0 pointer-events-none" />
      <Frame37 />
      <p className="font-['Suisse_Int'l:Regular',sans-serif] leading-[25.6px] not-italic relative shrink-0 text-[#856b5a] text-[16px] w-full">{`A standard SEO audit looks at how well your site performs in traditional search engines like Google's organic results. A GEO audit (Generative Engine Optimisation) looks at a different question: how visible is your business to AI search tools like ChatGPT, Perplexity, and Google AI Overviews? These tools use different signals to decide what to surface and recommend — and most SEO tools don't track them at all.`}</p>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative">
      <p className="font-['Suisse_Int'l:Medium',sans-serif] leading-[22.4px] not-italic relative shrink-0 text-[#0f0906] text-[16px] w-full">Can I see a sample report before I pay?</p>
    </div>
  );
}

function Plus() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Plus">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Plus">
          <path d={svgPaths.p9106f00} fill="var(--fill-0, #0F0906)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Frame42 />
      <Plus />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col items-start py-[24px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#0d7c6b] border-b border-dashed inset-0 pointer-events-none" />
      <Frame41 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative">
      <p className="font-['Suisse_Int'l:Medium',sans-serif] leading-[22.4px] not-italic relative shrink-0 text-[#0f0906] text-[16px] w-full">My website is simple. Is this still useful for me?</p>
    </div>
  );
}

function Plus1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Plus">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Plus">
          <path d={svgPaths.p9106f00} fill="var(--fill-0, #0F0906)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Frame45 />
      <Plus1 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-col items-start py-[24px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#0d7c6b] border-b border-dashed inset-0 pointer-events-none" />
      <Frame44 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[620px]">
      <Frame36 />
      <Frame39 />
      <Frame43 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Suisse_Int'l:Medium',sans-serif] leading-[33.6px] min-w-full not-italic relative shrink-0 text-[#0f0906] text-[24px] w-[min-content]">FAQ</p>
      <Frame35 />
    </div>
  );
}

function Faq() {
  return (
    <div className="relative shrink-0 w-full" data-name="FAQ">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[410px] py-[72px] relative w-full">
          <Frame40 />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="bg-[#0d7c6b] content-stretch flex items-center justify-center px-[19.2px] py-[11.2px] relative rounded-[8px] shrink-0" data-name="btn">
        <p className="font-['Suisse_Int'l:Medium',sans-serif] leading-[20.8px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Get GEO Audit at S$99</p>
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Suisse_Int'l:Medium',sans-serif] leading-[33.6px] not-italic relative shrink-0 text-[#0f0906] text-[24px] whitespace-nowrap">Try Scantiv now.</p>
      <Frame />
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0">
      <p className="font-['Suisse_Int'l:Regular',sans-serif] leading-[21.6px] not-italic relative shrink-0 text-[#b49c8b] text-[14.4px] whitespace-nowrap">{` Scantiv Copyright 26`}</p>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex font-['Suisse_Int'l:Regular',sans-serif] gap-[24px] items-start justify-center leading-[21.6px] not-italic relative shrink-0 text-[#b49c8b] text-[14.4px] whitespace-nowrap">
      <p className="relative shrink-0">Privacy</p>
      <p className="relative shrink-0">Terms</p>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0">
      <Frame56 />
      <Frame57 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center justify-center px-[40px] relative w-full">
          <div className="relative shrink-0 size-[22px]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
              <g id="Vector">
                <path d={svgPaths.p20264200} fill="#0F0906" />
                <path d={svgPaths.p5ebcf00} fill="url(#paint0_linear_1_457)" />
              </g>
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_457" x1="11.1604" x2="11.1604" y1="3.53571" y2="18.3216">
                  <stop stopColor="white" />
                  <stop offset="0.75" stopColor="#0D7C6B" />
                  <stop offset="1" stopColor="#09584C" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <Frame55 />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Footer">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-start px-[409px] py-[72px] relative w-full">
          <Frame46 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 622 1">
                <line id="Line 1" stroke="var(--stroke-0, #0D7C6B)" strokeDasharray="1 8" x2="622" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
          <Frame54 />
        </div>
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1440px]" data-name="Main">
      <Hero />
      <ProblemSpace />
      <Features />
      <SampleReport />
      <HowItWorks />
      <PricingSection />
      <Faq />
      <Footer />
    </div>
  );
}

export default function MainDesign() {
  return (
    <div className="bg-[#fdf9f4] content-stretch flex items-center relative size-full" data-name="Main Design">
      <Main />
    </div>
  );
}
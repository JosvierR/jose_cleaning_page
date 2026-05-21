"use client";

export function MobileStickyCta() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-mist bg-porcelain/96 px-6 py-4 backdrop-blur-lg pb-[max(1rem,env(safe-area-inset-bottom))] lg:hidden">
      <a href="#contact" className="btn-primary-maison block w-full text-center">
        Request Walkthrough
      </a>
      <p className="mt-2.5 text-center text-[0.58rem] uppercase tracking-[0.2em] text-navy/40">
        Response within 24 hours
      </p>
    </div>
  );
}

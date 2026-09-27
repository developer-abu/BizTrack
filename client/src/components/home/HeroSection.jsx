import React from "react";

const HeroSection = () => {
  return (
    <section className="overflow-hidden border-b border-[#dedbd3] bg-[#f7f4ed]">
      <div className="mx-auto grid min-h-[680px] max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-20">
        <div className="max-w-xl">
          <div className="mb-7 flex items-center gap-3 text-xs font-bold uppercase text-[#55766a]">
            <span className="h-px w-9 bg-[#d8795b]" />
            Business, in better balance
          </div>
          <h1 className="font-serif text-5xl leading-[1.08] text-[#202a27] sm:text-6xl lg:text-[4.35rem]">
            Manage Your Business
            <span className="mt-1 block text-[#34715f]">Simply and Efficiently</span>
          </h1>
          <p className="mt-7 max-w-lg text-base leading-8 text-[#65716c] sm:text-lg">
            BizTrack helps small businesses manage products, inventory, sales,
            customers, payments, and outstanding dues in one place.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="/register"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#27624f] px-6 text-sm font-bold text-white shadow-[0_8px_20px_rgba(39,98,79,0.18)] hover:bg-[#1d4e3e]"
            >
              Get Started
            </a>
            <a
              href="#features"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-[#c9cec6] bg-transparent px-6 text-sm font-bold text-[#33443d] hover:border-[#76968a] hover:bg-white/70"
            >
              Explore Features
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[620px]" aria-hidden="true">
          <div className="absolute -inset-5 -rotate-2 rounded-[10px] bg-[#e9d8c3] sm:-inset-7" />
          <div className="relative rounded-[8px] border border-[#dedbd3] bg-white p-3 shadow-[0_28px_80px_rgba(32,42,39,0.16)] sm:p-5">
            <div className="flex items-center justify-between border-b border-[#eeeae2] pb-4">
              <div className="flex items-center gap-2.5">
                <span className="grid size-8 place-items-center rounded-md bg-[#27624f] text-xs font-extrabold text-white">B</span>
                <span className="text-sm font-extrabold text-[#25342e]">BizTrack</span>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#8a948e]">Shop workspace</span>
            </div>

            <div className="pt-6">
              <p className="text-xs font-medium text-[#8a948e]">Everyday business tools</p>
              <p className="mt-1 text-xl font-bold text-[#25342e]">Keep your shop organized</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-md border border-[#eeeae2] p-4">
                  <span className="grid size-8 place-items-center rounded-md bg-[#edf3ee] text-xs font-extrabold text-[#34715f]">01</span>
                  <p className="mt-3 text-sm font-bold text-[#34443d]">Products</p>
                  <p className="mt-1 text-xs leading-5 text-[#7b8780]">Add products and manage your full product list.</p>
                </div>
                <div className="rounded-md border border-[#eeeae2] p-4">
                  <span className="grid size-8 place-items-center rounded-md bg-[#f8eee5] text-xs font-extrabold text-[#a65c39]">02</span>
                  <p className="mt-3 text-sm font-bold text-[#34443d]">Sales</p>
                  <p className="mt-1 text-xs leading-5 text-[#7b8780]">Create sales and view past receipts.</p>
                </div>
                <div className="rounded-md border border-[#eeeae2] p-4">
                  <span className="grid size-8 place-items-center rounded-md bg-[#edf3ee] text-xs font-extrabold text-[#34715f]">03</span>
                  <p className="mt-3 text-sm font-bold text-[#34443d]">Stock</p>
                  <p className="mt-1 text-xs leading-5 text-[#7b8780]">Check low-stock items and add stock.</p>
                </div>
                <div className="rounded-md border border-[#eeeae2] p-4">
                  <span className="grid size-8 place-items-center rounded-md bg-[#f8eee5] text-xs font-extrabold text-[#a65c39]">04</span>
                  <p className="mt-3 text-sm font-bold text-[#34443d]">Due payments</p>
                  <p className="mt-1 text-xs leading-5 text-[#7b8780]">Record payments against outstanding dues.</p>
                </div>
              </div>
              <p className="mt-4 text-center text-[10px] text-[#8a948e]">Product, inventory, sales, and payment management</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
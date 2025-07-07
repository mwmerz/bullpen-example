import { ArrowLeftRight } from "lucide-react";
import { cn } from "../../lib/utils";
import { Token } from "../ui/Token";

type DesktopFooterProps = {
  className?: string;
};

export function DesktopFooter({ className }: DesktopFooterProps) {
  return (
    <footer
      className={cn(
        "hidden md:flex w-full sticky bottom-0 bg-[var(--bg-primary)] border-t border-[var(--neutral-elevation-3)] py-2",
        className
      )}
    >
      <div className="w-full flex items-center justify-between px-3 overflow-x-auto">
        {/* Left side - Status and prices */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {/* Live indicator */}
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-[var(--bg-secondary)] border border-[var(--primary-400)] flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary-400)]"></div>
            </div>
            <span className="text-[var(--primary-400)] text-xs">Live</span>
          </div>

          <div className="w-px h-5 bg-[var(--neutral-elevation-3)]"></div>

          {/* Price indicators */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="flex items-center gap-1">
              <Token token="btc" className="w-4 h-4" />
              <span className="text-orange-500 text-xs">$107.4K</span>
            </div>

            <div className="flex items-center gap-1">
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                className="flex-shrink-0"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.71786 7.62524C1.75013 7.58581 1.78943 7.55433 1.83327 7.53276C1.87708 7.51119 1.92452 7.50005 1.97244 7.5L9.82762 7.50714C9.8611 7.50724 9.8938 7.5181 9.92178 7.53843C9.94981 7.55876 9.97189 7.58771 9.98534 7.62171C9.99885 7.65571 10.0031 7.69338 9.99773 7.73005C9.99233 7.76671 9.97746 7.80086 9.95491 7.82833L8.28213 9.87476C8.24986 9.91419 8.21051 9.94571 8.16667 9.96729C8.12278 9.98886 8.07534 10 8.02733 10L0.172371 9.99286C0.13892 9.99276 0.106206 9.9819 0.0782059 9.96157C0.0502061 9.94124 0.0281252 9.91229 0.014646 9.87829C0.00116688 9.84429 -0.00313629 9.80662 0.00226822 9.76995C0.00766845 9.73329 0.0225448 9.69914 0.0450801 9.67167L1.71786 7.62524ZM9.95491 5.92167C9.97746 5.94914 9.99233 5.98329 9.99773 6.01995C10.0031 6.05662 9.99885 6.09429 9.98534 6.12829C9.97189 6.16229 9.94981 6.19124 9.92178 6.21157C9.8938 6.2319 9.8611 6.24276 9.82762 6.24286L1.97265 6.25C1.92469 6.25 1.87725 6.23886 1.83336 6.21729C1.78947 6.19571 1.75013 6.16419 1.71786 6.12476L0.0450801 4.07714C0.0225448 4.04967 0.00766845 4.01552 0.00226822 3.97886C-0.00313629 3.94219 0.00116688 3.90452 0.014646 3.87052C0.0281252 3.83652 0.0502061 3.80757 0.0782059 3.78724C0.106206 3.7669 0.13892 3.75605 0.172371 3.75595L8.02755 3.74881C8.07551 3.74886 8.12291 3.76 8.16675 3.78157C8.2106 3.80314 8.2499 3.83462 8.28213 3.87405L9.95491 5.92167ZM1.71786 0.125238C1.75013 0.0858237 1.78943 0.0543237 1.83327 0.032757C1.87708 0.0111951 1.92452 3.33333e-05 1.97244 0L9.82762 0.00714293C9.8611 0.00721912 9.8938 0.0180857 9.92178 0.0384238C9.94981 0.0587619 9.97189 0.0876953 9.98534 0.12171C9.99885 0.155729 10.0031 0.193362 9.99773 0.230038C9.99233 0.266714 9.97746 0.300857 9.95491 0.328333L8.28213 2.37476C8.24986 2.41419 8.21051 2.44571 8.16667 2.46729C8.12278 2.48886 8.07534 2.5 8.02733 2.5L0.172371 2.49286C0.13892 2.49276 0.106206 2.4819 0.0782059 2.46157C0.0502061 2.44124 0.0281252 2.41229 0.014646 2.37829C0.00116688 2.34429 -0.00313629 2.30662 0.00226822 2.26995C0.00766845 2.23329 0.0225448 2.19914 0.0450801 2.17167L1.71786 0.125238Z"
                  fill="url(#paint0_linear_5424_2126)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_5424_2126"
                    x1="0.303519"
                    y1="10.2181"
                    x2="10.6821"
                    y2="0.876983"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#9945FF" />
                    <stop offset="0.2" stopColor="#7962E7" />
                    <stop offset="1" stopColor="#00D18C" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-green-400 text-xs">$150.14</span>
            </div>

            <div className="flex items-center gap-1">
              <svg
                width="12"
                height="10"
                viewBox="0 0 12 10"
                fill="none"
                className="text-[var(--hype-teal)] flex-shrink-0"
              >
                <path
                  d="M11.3333 4.94717C11.3333 8.69401 9.04038 9.89629 7.83225 8.82577C6.83781 7.95286 6.54194 6.10829 5.04617 5.91889C3.14769 5.68008 2.98332 8.20818 1.73411 8.20818C0.27943 8.20818 0 6.09182 0 5.00482C0 3.89311 0.312303 2.3779 1.5533 2.3779C2.99976 2.3779 3.08194 4.54367 4.89002 4.42838C6.68987 4.30486 6.72275 2.0485 7.88981 1.08503C8.90887 0.253301 11.3333 1.1509 11.3333 4.94717Z"
                  fill="#4FF0D6"
                />
              </svg>
              <span className="text-[var(--hype-teal)] text-xs">$38.46</span>
            </div>
          </div>

          <div className="hidden md:block w-px h-5 bg-[var(--neutral-elevation-3)]"></div>

          {/* Trading pair swap */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center gap-1 px-1 py-1 rounded">
              <Token token="solana" className="w-4 h-4" />
              <span className="text-white text-xs">SOL</span>
            </div>
            <div className="p-1 bg-primary/10 rounded">
              <ArrowLeftRight size={12} className="text-[var(--primary-400)]" />
            </div>
            <div className="flex items-center gap-1 px-1 py-1 rounded">
              <span className="text-white text-xs">USDC</span>
              <Token token="USDC" className="w-4 h-4" />
            </div>
          </div>

          <div className="hidden lg:block w-px h-5 bg-[var(--neutral-elevation-3)]"></div>

          {/* Telegram connect */}
          <div className="hidden lg:flex items-center gap-2 px-2 py-1 rounded">
            <svg
              width="12"
              height="12"
              viewBox="0 0 13 12"
              fill="none"
              className="flex-shrink-0"
            >
              <g clipPath="url(#clip0_5424_2155)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.6925 2.53162L9.23059 9.56338C9.19616 9.7294 9.00148 9.80463 8.86412 9.70482L6.86851 8.25598C6.74737 8.168 6.58217 8.17268 6.46619 8.26724L5.35976 9.16916C5.23136 9.27417 5.03786 9.21565 4.98869 9.0575L4.22042 6.58672L2.23553 5.84593C2.0339 5.7704 2.03218 5.48575 2.23323 5.40831L10.3793 2.26579C10.5519 2.19901 10.7301 2.35029 10.6925 2.53162Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.74408 3.80305L4.86487 6.19223C4.71619 6.28398 4.64621 6.46354 4.69418 6.63164L5.11359 8.10537C5.14343 8.20978 5.29492 8.19911 5.30945 8.09123L5.41845 7.28306C5.43904 7.1309 5.51159 6.99064 5.62415 6.88593L8.82557 3.91003C8.88552 3.85452 8.81376 3.76026 8.74408 3.80305Z"
                  fill="#06121B"
                />
              </g>
            </svg>
            <span className="text-white text-xs whitespace-nowrap">
              Connect Telegram
            </span>
          </div>
        </div>

        {/* Right side - Links and social */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="hidden lg:flex items-center gap-3 text-[var(--neutral-200)]-text text-xs">
            <a href="#" className="hover:text-white transition-colors">
              Support
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Docs
            </a>
          </div>

          <div className="hidden lg:block w-px h-5 bg-[var(--neutral-elevation-3)]"></div>

          <div className="flex items-center gap-1">
            <button className="p-1 rounded hover:bg-[var(--neutral-elevation-3)]/50 transition-colors">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M10.1585 2.07779C9.39367 1.72685 8.57349 1.46829 7.71595 1.3202C7.70033 1.31734 7.68473 1.32449 7.67669 1.33877C7.57121 1.52638 7.45437 1.77113 7.37255 1.9635C6.4502 1.82541 5.53259 1.82541 4.62916 1.9635C4.54732 1.76685 4.42624 1.52638 4.32029 1.33877C4.31224 1.32496 4.29664 1.31782 4.28103 1.3202C3.42395 1.46781 2.60378 1.72637 1.83847 2.07779C1.83184 2.08064 1.82616 2.08541 1.82239 2.0916C0.266696 4.41578 -0.159475 6.68283 0.0495901 8.92178C0.050536 8.93273 0.0566849 8.94321 0.065199 8.94987C1.0916 9.70363 2.08585 10.1612 3.06164 10.4646C3.07726 10.4693 3.0938 10.4636 3.10374 10.4507C3.33456 10.1355 3.54032 9.80317 3.71674 9.45365C3.72715 9.43318 3.71721 9.40889 3.69593 9.4008C3.36957 9.27699 3.0588 9.12605 2.75986 8.95463C2.73622 8.94082 2.73433 8.907 2.75608 8.89081C2.81899 8.84367 2.88191 8.79463 2.94198 8.74511C2.95285 8.73606 2.96799 8.73415 2.98077 8.73987C4.94464 9.6365 7.07077 9.6365 9.01148 8.73987C9.02425 8.73368 9.0394 8.73559 9.05074 8.74463C9.11082 8.79415 9.17373 8.84367 9.23711 8.89081C9.25886 8.907 9.25744 8.94082 9.2338 8.95463C8.93486 9.12938 8.6241 9.27699 8.29726 9.40032C8.27598 9.40842 8.26651 9.43318 8.27692 9.45365C8.45713 9.80268 8.66288 10.135 8.88945 10.4503C8.89891 10.4636 8.91593 10.4693 8.93155 10.4646C9.91207 10.1612 10.9063 9.70363 11.9327 8.94987C11.9417 8.94321 11.9474 8.9332 11.9483 8.92225C12.1985 6.33378 11.5292 4.08532 10.1741 2.09207C10.1708 2.08541 10.1651 2.08064 10.1585 2.07779ZM4.01001 7.55849C3.41875 7.55849 2.93157 7.01567 2.93157 6.34903C2.93157 5.68238 3.4093 5.13956 4.01001 5.13956C4.61544 5.13956 5.0979 5.68715 5.08844 6.34903C5.08844 7.01567 4.6107 7.55849 4.01001 7.55849ZM7.99737 7.55849C7.40613 7.55849 6.91895 7.01567 6.91895 6.34903C6.91895 5.68238 7.39666 5.13956 7.99737 5.13956C8.60282 5.13956 9.08527 5.68715 9.07582 6.34903C9.07582 7.01567 8.60282 7.55849 7.99737 7.55849Z"
                  fill="white"
                />
              </svg>
            </button>
            <button className="p-1 rounded hover:bg-[var(--neutral-elevation-3)]/50 transition-colors">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M9.16314 0.999695H10.8499L7.16486 5.21144L11.5 10.9427H8.10562L5.44702 7.46671L2.40497 10.9427H0.717216L4.65872 6.43774L0.5 0.999695H3.98055L6.3837 4.17686L9.16314 0.999695ZM8.57115 9.93308H9.50579L3.4727 1.95626H2.46973L8.57115 9.93308Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

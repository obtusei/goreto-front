type Props = {
  size?: string;
};

export default function LogoIcon({ size }: Props) {
  return (
    <svg
      width={size ? size : "63"}
      height={size ? size : "63"}
      viewBox="0 0 63 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29.2443 1.99998C29.2443 1.99998 33.5772 13.7189 33.2422 24.0008M17.3607 60.2585C17.3607 60.2585 24.1748 44.1432 30.6961 33.8537"
        stroke="#038850"
        stroke-width="4.00001"
        stroke-linecap="round"
      />
      <path
        d="M37.7972 1.99997C37.7972 1.99997 43.2937 16.8656 41.4268 27.8009M25.9137 60.2585C25.9137 60.2585 31.755 46.4437 37.797 36.2289"
        stroke="#038850"
        stroke-width="4.00001"
        stroke-linecap="round"
      />
      <path
        d="M2.00007 34.4638C2.00007 34.4638 23.5635 26.4906 33.8526 33.0119C44.1417 39.5332 60.2564 46.3474 60.2564 46.3474"
        stroke="#038850"
        stroke-width="4.00001"
        stroke-linecap="round"
      />
      <path
        d="M2.00001 25.9104C2.00001 25.9104 23.5636 17.9371 33.8526 24.4584C44.1417 30.9796 60.2564 37.7936 60.2564 37.7936"
        stroke="#038850"
        stroke-width="4.00001"
        stroke-linecap="round"
      />
    </svg>
  );
}

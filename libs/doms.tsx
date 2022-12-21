import Link from "next/link";

export const PERCENTS = [45, 70, 90, 100, 100, 100];

export const TITLES = [
  "Quick quote",
  "Claim now",
  "Sign & complete",
  "Last thing!",
  "Lastly!",
  "You're all done.",
];

export const SUB_TITLES = [
  "Enter your details to receive your estimated tax claim quote",
  "Let us know some extra details so we can process your claim",
  <span>
    Please carefully read the&nbsp;
    <Link
      href="/"
      target="_blank"
      className="border-b border-gray-500 dark:border-gray-400"
    >
      tax claim documentations
    </Link>
    &nbsp;and the following statements, before Signing
  </span>,
  "Thank you. We just need the following to start your claim",
  "We also need your Employers PAYE Number to submit your claim",
  "Your PAYE information has been received",
];

export const CONFIRMS = [
  "ClaimingMadeEasy is a trading style of Approved Claims Group Ltd, a HMRC registered Tax Agent. We will handle and process your claim",
  "I confirm that I have paid taxes in the relevant years I am claiming for",
  "I understand that the information I have provided will be shared with HMRC and confirm that this is true and accurate",
  "I understand that ClaimingMadeEasy will be appointed as my tax agent to enable them to submit tax refund claims to HMRC on my behalf and re-claim any overpaid tax",
  "I have read the tax claim documents, agree to the terms of engagement and understand that the information I have provided and my signature will be used to populate a claim form(s) to be sent to HMRC",
];

export const NEXT_BUTTON_HELPERS = [
  "",
  "",
  "",
  "",
  "When you click submit, we will receive your personal information and claim documents, to begin processing your tax refund claims. We will handle your data in accordance with our Privacy Policy.",
  "",
];

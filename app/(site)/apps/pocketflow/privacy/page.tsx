import type { Metadata } from "next";
import AppPrivacyPolicy from "../../_components/AppPrivacyPolicy";

export const metadata: Metadata = {
  title: "PocketFlow Privacy Policy | Hiren Thakore",
  description: "Privacy policy for the PocketFlow Android app.",
};

export default function PocketFlowPrivacyPage() {
  return (
    <AppPrivacyPolicy
      appName="PocketFlow"
      summary="PocketFlow processes shared text, links, supported images and PDFs locally. It requires no account, includes no advertising or analytics SDK, and does not transmit captures off your device."
      sections={[
        {
          title: "Information you share with PocketFlow",
          paragraphs: [
            "When you choose PocketFlow from Android's share sheet, the app can receive text, HTML, JPEG, PNG, WebP or PDF content. It copies supported file content into private app storage before local processing and keeps the resulting action in its local database.",
          ],
        },
        {
          title: "On-device text recognition and classification",
          paragraphs: [
            "PocketFlow uses bundled on-device text recognition for supported images and the first page of PDFs. Extracted text is classified locally to suggest a next action. Captures and extracted text are not uploaded or shared.",
          ],
        },
        {
          title: "Reminders and notifications",
          paragraphs: [
            "If you grant notification permission and choose a valid future time, PocketFlow can schedule a local reminder. Notification permission is optional and can be revoked in Android settings.",
          ],
        },
        {
          title: "Network, accounts and sharing",
          bullets: [
            "The app explicitly removes Internet permission from its release manifest.",
            "No account, cloud sync, advertising, analytics or billing service is included.",
            "PocketFlow does not sell or share personal information.",
            "Android backup and device-to-device transfer are disabled for app data.",
          ],
        },
        {
          title: "Retention and deletion",
          paragraphs: [
            "Saved actions and private capture files remain on your device until you delete them. Settings includes controls to delete all PocketFlow data, including its database rows and private captures. Uninstalling the app also removes its local app data.",
          ],
        },
        {
          title: "Children",
          paragraphs: [
            "PocketFlow is a general productivity utility and is not directed to children. It does not knowingly collect personal information from children.",
          ],
        },
        {
          title: "Changes to this policy",
          paragraphs: [
            "If this policy changes, the updated version and effective date will be posted at this URL.",
          ],
        },
      ]}
    />
  );
}

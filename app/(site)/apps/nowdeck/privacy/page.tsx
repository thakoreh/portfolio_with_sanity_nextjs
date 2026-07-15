import type { Metadata } from "next";
import AppPrivacyPolicy from "../../_components/AppPrivacyPolicy";

export const metadata: Metadata = {
  title: "NowDeck Privacy Policy | Hiren Thakore",
  description: "Privacy policy for the NowDeck Android app.",
};

export default function NowDeckPrivacyPage() {
  return (
    <AppPrivacyPolicy
      appName="NowDeck"
      summary="NowDeck works locally, requires no account, includes no advertising or analytics SDK, and does not transmit personal data off your device."
      sections={[
        {
          title: "Information used on your device",
          paragraphs: [
            "NowDeck may use device battery state, current time, whether a supported audio output such as headphones is connected, and whether the optional PocketFlow app is installed. These signals choose and describe cards locally. NowDeck does not record audio, read device names or exchange PocketFlow content.",
          ],
        },
        {
          title: "Optional Calendar access",
          paragraphs: [
            "If you grant Calendar permission, NowDeck reads the title, start time and location of the next upcoming event so it can display and rank that event locally. Calendar information is not uploaded or shared. You can deny or revoke this permission and continue using the rest of the app.",
          ],
        },
        {
          title: "Notifications and focus",
          paragraphs: [
            "If you grant notification permission, NowDeck can show a local reminder when a focus session ends. Notification permission is optional and can be revoked in Android settings.",
          ],
        },
        {
          title: "Local storage and demo content",
          paragraphs: [
            "NowDeck stores card order, pinned cards, rules, display choices, permission-request history and widget configuration locally. Sample calendar, weather and PocketFlow cards are clearly labelled Demo. No live weather service or location permission is included.",
          ],
        },
        {
          title: "Network, accounts and sharing",
          bullets: [
            "The app does not request Internet access.",
            "No account, cloud sync, advertising, analytics or billing service is included.",
            "NowDeck does not sell or share personal information.",
            "Android backup and device-to-device transfer are disabled for app data.",
          ],
        },
        {
          title: "Retention and deletion",
          paragraphs: [
            "Use Settings > Delete all local data to erase NowDeck preferences and choices. Uninstalling the app also removes its local app data. Calendar events remain managed by your calendar provider and are not copied into NowDeck's persistent storage.",
          ],
        },
        {
          title: "Children",
          paragraphs: [
            "NowDeck is a general productivity utility and is not directed to children. It does not knowingly collect personal information from children.",
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

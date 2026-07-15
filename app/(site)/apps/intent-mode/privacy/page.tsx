import type { Metadata } from "next";
import AppPrivacyPolicy from "../../_components/AppPrivacyPolicy";

export const metadata: Metadata = {
  title: "Intent Mode Privacy Policy | Hiren Thakore",
  description: "Privacy policy for the Intent Mode Android app.",
};

export default function IntentModePrivacyPage() {
  return (
    <AppPrivacyPolicy
      appName="Intent Mode"
      summary="Intent Mode is local by default. It requires no account, includes no advertising or analytics SDK, and does not transmit personal data off your device."
      sections={[
        {
          title: "Information used on your device",
          paragraphs: [
            "Intent Mode stores the intentions, selected apps, focus plans, schedules, session check-ins and settings you create in its private local database. This information is used only to provide focus sessions and on-device summaries.",
          ],
        },
        {
          title: "Optional Usage Access",
          paragraphs: [
            "If you enable Android Usage Access, Intent Mode reads local app-usage records to make private activity summaries more accurate. Usage Access is optional, the app works without it, and usage records are not uploaded or shared.",
          ],
        },
        {
          title: "Focus timer and notifications",
          paragraphs: [
            "When you start a focus session, Intent Mode runs a user-started, time-bounded foreground timer and displays its required ongoing notification. Notification permission can also be used for session status. You can stop the timer from the app or notification.",
          ],
        },
        {
          title: "Network, accounts and sharing",
          bullets: [
            "The app does not request Internet access.",
            "No account, cloud sync, advertising, analytics or billing service is included.",
            "Intent Mode does not sell or share personal information.",
            "Android backup and device-to-device transfer are disabled for app data.",
          ],
        },
        {
          title: "Retention and deletion",
          paragraphs: [
            "Local records remain until you delete them. Use Privacy > Delete all Intent Mode data to erase the app's local database and preferences and return to onboarding. Uninstalling the app also removes its local app data.",
          ],
        },
        {
          title: "Children",
          paragraphs: [
            "Intent Mode is a general productivity utility and is not directed to children. It does not knowingly collect personal information from children.",
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

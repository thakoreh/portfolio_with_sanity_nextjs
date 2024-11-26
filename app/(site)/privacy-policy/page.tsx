'use client';

import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl shadow-sm p-8 border border-gray-200"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Privacy Policy - BlueSky Auto Follow Extension</h1>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Introduction</h2>
            <p className="text-gray-600">
              This Privacy Policy describes how your personal information is collected, used, and shared when you use our BlueSky Auto Follow Chrome Extension. We are committed to protecting your privacy and ensuring transparency in our data practices.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Collection</h2>
            <p className="text-gray-600 mb-4">
              We collect only the minimum necessary data required for the extension to function:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>User email (solely for authentication purposes)</li>
              <li>Follow counts (stored locally on your device only)</li>
              <li>No tracking or analytics beyond essential functionality</li>
              <li>No personal data is collected or shared with third parties</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Usage</h2>
            <p className="text-gray-600 mb-4">
              Your data is used strictly for the following purposes:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Email authentication only</li>
              <li>Local storage of follow statistics for progress tracking</li>
              <li>All data is automatically removed upon extension uninstallation</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Security Measures</h2>
            <p className="text-gray-600 mb-4">
              We implement several security measures to protect your data:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Secure Google OAuth implementation for authentication</li>
              <li>Local storage encryption for your data</li>
              <li>Rate limiting to prevent abuse</li>
              <li>Domain restriction to bsky.app only</li>
              <li>Built-in safety features including stop button and progress tracking</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Technical Implementation</h2>
            <p className="text-gray-600 mb-4">
              Our extension includes the following features for optimal user experience:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Smooth scrolling behavior</li>
              <li>Random delays between actions to prevent abuse</li>
              <li>Visual progress tracking and feedback</li>
              <li>Comprehensive error handling and recovery</li>
              <li>Clear visual indicators of extension status</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-gray-600">
              For any questions about this Privacy Policy or the BlueSky Auto Follow extension, please contact us at:{' '}
              <a href="mailto:hiren.thakore58@gmail.com" className="text-blue-600 hover:text-blue-700">
                hiren.thakore58@gmail.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Changes to This Policy</h2>
            <p className="text-gray-600">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the extension accordingly.
            </p>
          </section>
        </div>
      </motion.div>
    </main>
  );
}
// Feature flags for controlling tab visibility
export const FEATURE_FLAGS = {
  tabs: {
    manual: true,    // ✅ Keep enabled
    photo: false,    // ❌ Hide (but keep code)
    voice: false,    // ❌ Hide (but keep code)
    url: true        // ✅ Keep enabled
  }
} as const;

export type TabFeature = keyof typeof FEATURE_FLAGS.tabs;

export function isTabEnabled(tab: TabFeature): boolean {
  return FEATURE_FLAGS.tabs[tab];
}
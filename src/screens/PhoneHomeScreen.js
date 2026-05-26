import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Platform,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors, Spacing, Radius } from '../theme/tokens';

const CANVAS_W = 412;

// ─── Assets ──────────────────────────────────────────────────────────────────
const Icons = {
  brandLogo:      require('../../assets/icons/brand_logo.png'),
  engineDropdown: require('../../assets/icons/engine_dropdown.png'),
  searchCamera:   require('../../assets/icons/search_camera.png'),
  searchMic:      require('../../assets/icons/search_microphone.png'),
  navRecommend:   require('../../assets/icons/nav_recommend.png'),
  navVideo:       require('../../assets/icons/nav_video.png'),
  navHome:        require('../../assets/icons/nav_home.png'),
  navReading:     require('../../assets/icons/nav_reading.png'),
  navMenu:        require('../../assets/icons/nav_menu.png'),
  headerBg:       require('../../assets/images/home_header_bg.png'),
};

const SHORTCUTS = [
  { label: '书签',   icon: require('../../assets/icons/shortcut_bookmarks.png') },
  { label: '历史记录', icon: require('../../assets/icons/shortcut_history.png') },
  { label: '网址精选', icon: require('../../assets/icons/shortcut_curated.png') },
  { label: '小游戏',  icon: require('../../assets/icons/shortcut_games.png') },
  { label: '微博',   icon: require('../../assets/icons/shortcut_weibo.png') },
  { label: '免费小说', icon: require('../../assets/icons/shortcut_novel.png') },
  { label: '百度',   icon: require('../../assets/icons/shortcut_baidu.png') },
  { label: '爱奇艺',  icon: require('../../assets/icons/shortcut_iqiyi.png') },
  { label: '优酷',   icon: require('../../assets/icons/shortcut_youku.png') },
  { label: '知乎',   icon: require('../../assets/icons/shortcut_zhihu.png') },
  { label: '京东',   icon: require('../../assets/icons/shortcut_jd.png') },
  { label: '',      icon: require('../../assets/icons/shortcut_add.png') },
];

const NAV_ICONS = [
  Icons.navRecommend,
  Icons.navVideo,
  Icons.navHome,
  Icons.navReading,
  Icons.navMenu,
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function SearchModeTab() {
  return (
    <View style={styles.searchModeTab}>
      <View style={styles.searchModeActive}>
        <Text style={styles.searchModeActiveText}>搜全网</Text>
      </View>
      <View style={styles.searchModeInactive}>
        <Text style={styles.searchModeInactiveText}>问AI</Text>
      </View>
    </View>
  );
}

function EngineSelector() {
  return (
    <View style={styles.engineSelector}>
      <Text style={styles.engineText}>百度</Text>
      <Image source={Icons.engineDropdown} style={styles.engineDropdown} />
    </View>
  );
}

function SearchEntry() {
  return (
    <View style={styles.searchCard}>
      <View style={styles.searchInputRow}>
        <Text style={styles.searchPlaceholder}>告诉我想要了解的内容</Text>
      </View>
      <View style={styles.searchToolbar}>
        <View style={styles.searchLeft}>
          <SearchModeTab />
          <EngineSelector />
        </View>
        <View style={styles.searchRight}>
          <Image source={Icons.searchCamera} style={styles.searchActionIcon} />
          <Image source={Icons.searchMic} style={styles.searchActionIcon} />
        </View>
      </View>
    </View>
  );
}

function ShortcutTile({ label, icon }) {
  return (
    <View style={styles.shortcutTile}>
      <Image source={icon} style={styles.shortcutIcon} resizeMode="contain" />
      {label ? <Text style={styles.shortcutLabel}>{label}</Text> : null}
    </View>
  );
}

function SiteGrid() {
  const rows = [];
  for (let i = 0; i < SHORTCUTS.length; i += 5) {
    rows.push(SHORTCUTS.slice(i, i + 5));
  }
  return (
    <View style={styles.siteGrid}>
      {rows.map((row, ri) => (
        <View key={ri} style={styles.siteRow}>
          {row.map((item, ci) => (
            <ShortcutTile key={ci} label={item.label} icon={item.icon} />
          ))}
          {Array.from({ length: 5 - row.length }).map((_, i) => (
            <View key={`e-${i}`} style={styles.shortcutTile} />
          ))}
        </View>
      ))}
    </View>
  );
}

function BottomNav({ insets }) {
  return (
    <View style={[styles.bottomNav, { paddingBottom: Math.max(insets.bottom, 8) }]}>
      {NAV_ICONS.map((icon, i) => (
        <Image key={i} source={icon} style={styles.navIcon} resizeMode="contain" />
      ))}
    </View>
  );
}

// ─── Screen ───────────────────────────────────────────────────────────────────

export default function PhoneHomeScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.root}>
      <Image
        source={Icons.headerBg}
        style={[styles.headerBg, { top: insets.top }]}
        resizeMode="cover"
      />

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={[styles.scrollContent, { paddingTop: insets.top }]}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.logoWrapper}>
          <Image source={Icons.brandLogo} style={styles.brandLogo} resizeMode="cover" />
        </View>

        <View style={styles.searchWrapper}>
          <SearchEntry />
        </View>

        <View style={styles.gridWrapper}>
          <SiteGrid />
        </View>

        <View style={{ height: 80 }} />
      </ScrollView>

      <BottomNav insets={insets} />
    </View>
  );
}

// ─── Styles ───────────────────────────────────────────────────────────────────

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.bgPage,
  },

  headerBg: {
    position: 'absolute',
    left: 0,
    width: CANVAS_W,
    height: 426,
    zIndex: 0,
    opacity: 0.6,
  },

  scroll: {
    flex: 1,
    zIndex: 1,
  },
  scrollContent: {
    alignItems: 'center',
  },

  logoWrapper: {
    marginTop: 123,
    alignItems: 'center',
  },
  brandLogo: {
    width: 64,
    height: 64,
    borderRadius: 16,
    overflow: 'hidden',
  },

  searchWrapper: {
    marginTop: 123,
    marginHorizontal: 24,
    alignSelf: 'stretch',
  },
  searchCard: {
    backgroundColor: Colors.bgCard,
    borderRadius: Radius.card,
    borderWidth: 0.5,
    borderColor: Colors.searchOutline,
    paddingHorizontal: 12,
    paddingTop: 12,
    paddingBottom: 12,
    gap: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.04,
    shadowRadius: 12,
    elevation: 2,
  },
  searchInputRow: {
    height: 56,
    paddingHorizontal: 4,
    paddingTop: 4,
    justifyContent: 'flex-start',
  },
  searchPlaceholder: {
    fontSize: 16,
    lineHeight: 24,
    color: Colors.textPlaceholder,
    fontFamily: Platform.OS === 'android' ? 'sans-serif' : undefined,
  },
  searchToolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 28,
  },
  searchLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  searchRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  searchActionIcon: {
    width: 24,
    height: 24,
  },

  searchModeTab: {
    flexDirection: 'row',
    height: 28,
    backgroundColor: Colors.tabBg,
    borderRadius: Radius.tab,
    padding: 2,
  },
  searchModeActive: {
    height: 24,
    backgroundColor: Colors.bgCard,
    borderRadius: Radius.tabItem,
    paddingHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchModeActiveText: {
    fontSize: 12,
    color: Colors.textPrimary,
  },
  searchModeInactive: {
    width: 52,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchModeInactiveText: {
    fontSize: 12,
    color: Colors.textSecondary,
  },

  engineSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 28,
    backgroundColor: Colors.bgElevated,
    borderWidth: 0.5,
    borderColor: Colors.engineBorder,
    borderRadius: Radius.engine,
    paddingHorizontal: 8,
    gap: 4,
  },
  engineText: {
    fontSize: 12,
    color: Colors.textPrimary,
  },
  engineDropdown: {
    width: 16,
    height: 16,
  },

  gridWrapper: {
    marginTop: 32,
    marginHorizontal: 24,
    alignSelf: 'stretch',
  },
  siteGrid: {
    gap: 16,
  },
  siteRow: {
    flexDirection: 'row',
  },
  shortcutTile: {
    flex: 1,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 12,
  },
  shortcutIcon: {
    width: 36,
    height: 36,
  },
  shortcutLabel: {
    fontSize: 12,
    lineHeight: 14,
    color: Colors.textPrimary,
    textAlign: 'center',
  },

  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: Colors.bgPage,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.screenPadding,
    paddingTop: 16,
  },
  navIcon: {
    width: 28,
    height: 28,
  },
});

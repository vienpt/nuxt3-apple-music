<template>
  <nav class="sidebar">
<!--    header-->
    <header class="sidebar-header">
      <div class="py-4 px-8 grid gap-8">
        <NuxtLink to="/">
          <AppleMusic />
        </NuxtLink>
        <UInput
          icon="i-heroicons-magnifying-glass"
          type="text"
          placeholder="Search"
          color="red"
          variant="outline"
        />
      </div>
    </header>
<!--    content-->
    <div class="sidebar-content">
      <div class="sidebar-content_items">
        <div class="sidebar-content_items-category">
          <NuxtLink class="inline-flex space-x-2" to="/">
            <ListenNow id="svg-listen-now"></ListenNow>
            <span>Listen Now</span>
          </NuxtLink>
          <NuxtLink class="inline-flex space-x-2" to="/">
            <Browser id="svg-browser"></Browser>
            <span>Browser</span>
          </NuxtLink>
          <NuxtLink class="inline-flex space-x-2" to="/">
            <Radio id="svg-radio"></Radio>
            <span>Radio</span>
          </NuxtLink>
        </div>
        <div class="sidebar-content_items-library">
          <span class="text-xs mb-1 text-gray-400">Library</span>
          <NuxtLink class="inline-flex space-x-2" to="/">
            <RecentlyAdded id="svg-recently-added"></RecentlyAdded>
            <span>Recently Added</span>
          </NuxtLink>
          <NuxtLink class="inline-flex space-x-2" to="/">
            <Artist id="svg-artist"></Artist>
            <span>Artists</span>
          </NuxtLink>
          <NuxtLink class="inline-flex space-x-2" to="/">
            <Album id="svg-album"></Album>
            <span>Albums</span>
          </NuxtLink>
          <NuxtLink class="inline-flex space-x-2" to="/">
            <Song id="svg-song"></Song>
            <span>Songs</span>
          </NuxtLink>
          <NuxtLink class="inline-flex space-x-2" to="/">
            <MadeForYou id="svg-made-for-you"></MadeForYou>
            <span>Made for You</span>
          </NuxtLink>
        </div>
        <div class="sidebar-content_items-playlist">
          <span class="text-xs mb-1 text-gray-400">Playlists</span>
          <NuxtLink class="inline-flex space-x-2" to="/">
            <RecentlyAdded id="svg-recently-added"></RecentlyAdded>
            <span>Recently Added</span>
          </NuxtLink>
          <NuxtLink class="inline-flex space-x-2" to="/">
            <Artist id="svg-artist"></Artist>
            <span>Artists</span>
          </NuxtLink>
          <NuxtLink class="inline-flex space-x-2" to="/">
            <Album id="svg-album"></Album>
            <span>Albums</span>
          </NuxtLink>
          <NuxtLink class="inline-flex space-x-2" to="/">
            <Song id="svg-song"></Song>
            <span>Songs</span>
          </NuxtLink>
          <NuxtLink class="inline-flex space-x-2" to="/">
            <MadeForYou id="svg-made-for-you"></MadeForYou>
            <span>Made for You</span>
          </NuxtLink>
          <NuxtLink class="inline-flex space-x-2" to="/">
            <RecentlyAdded id="svg-recently-added"></RecentlyAdded>
            <span>Recently Added</span>
          </NuxtLink>
          <NuxtLink class="inline-flex space-x-2" to="/">
            <Artist id="svg-artist"></Artist>
            <span>Artists</span>
          </NuxtLink>
          <NuxtLink class="inline-flex space-x-2" to="/">
            <Album id="svg-album"></Album>
            <span>Albums</span>
          </NuxtLink>
          <NuxtLink class="inline-flex space-x-2" to="/">
            <Song id="svg-song"></Song>
            <span>Songs</span>
          </NuxtLink>
          <NuxtLink class="inline-flex space-x-2" to="/">
            <MadeForYou id="svg-made-for-you"></MadeForYou>
            <span>Made for You</span>
          </NuxtLink>
          <NuxtLink class="inline-flex space-x-2" to="/">
            <Album id="svg-album"></Album>
            <span>Albums</span>
          </NuxtLink>
          <NuxtLink class="inline-flex space-x-2" to="/">
            <Song id="svg-song"></Song>
            <span>Songs</span>
          </NuxtLink>
          <NuxtLink class="inline-flex space-x-2" to="/">
            <MadeForYou id="svg-made-for-you"></MadeForYou>
            <span>Made for You</span>
          </NuxtLink>
          <NuxtLink class="inline-flex space-x-2" to="/">
            <RecentlyAdded id="svg-recently-added"></RecentlyAdded>
            <span>Recently Added</span>
          </NuxtLink>
          <NuxtLink class="inline-flex space-x-2" to="/">
            <Artist id="svg-artist"></Artist>
            <span>Artists</span>
          </NuxtLink>
          <NuxtLink class="inline-flex space-x-2" to="/">
            <Album id="svg-album"></Album>
            <span>Albums</span>
          </NuxtLink>
          <NuxtLink class="inline-flex space-x-2" to="/">
            <Song id="svg-song"></Song>
            <span>Songs</span>
          </NuxtLink>
          <NuxtLink class="inline-flex space-x-2" to="/">
            <MadeForYou id="svg-made-for-you"></MadeForYou>
            <span>Made for You</span>
          </NuxtLink>
        </div>
      </div>
    </div>
<!--    footer-->
    <div class="sidebar-footer">
      <OpenMusic id="svg-open-music"></OpenMusic>
      <NuxtLink class="inline-flex items-center gap-1" to="/">
        <span class="text-sm text-gray-400">Open in Music</span>
        <span>
          <TargetBlank id="svg-target-blank"></TargetBlank>
        </span>
      </NuxtLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
import ListenNow from '~/components/Svg/ListenNow.vue'
import Browser from '~/components/Svg/Browser.vue'
import Radio from '~/components/Svg/Radio.vue'
import RecentlyAdded from '~/components/Svg/RecentlyAdded.vue'
import Artist from '~/components/Svg/Artist.vue'
import Album from '~/components/Svg/Album.vue'
import Song from '~/components/Svg/Song.vue'
import MadeForYou from '~/components/Svg/MadeForYou.vue'
import AppleMusic from '~/components/Svg/AppleMusic.vue'
import TargetBlank from '~/components/Svg/TargetBlank.vue'
import OpenMusic from '~/components/Svg/Music.vue'
</script>

<style lang="postcss" scoped>
  .sidebar {
    height: auto;
    width: 260px;
    @apply border-r border-gray-800;

    &-header {
      @apply pb-3;

      svg {
        fill: white;
      }
    }

    &-content {
      overflow-y: auto;
      overflow-x: hidden;
      height: calc(100vh - 180px);

      &_items {
        display: grid;
        padding: 0 2.5rem;
        grid-template-areas:
          "category"
          "library"
          "playlist";
        grid-template-rows: auto auto minmax(0, 1fr);
        row-gap: 20px;

        &-category {
          grid-area: category;
        }
        &-library {
          grid-area: library;
        }
        &-playlist {
          grid-area: playlist
        }

        &-category, &-library, &-playlist {
          @apply flex flex-col gap-2;
        }
      }
    }

    &-footer {
      @apply inline-flex px-10 items-center py-3 gap-2;

      #svg-target-blank, #svg-open-music {
        fill: #404040;
      }
      #svg-target-blank {
        width: 9px;
        height: 9px;
      }
    }

    #svg-listen-now, #svg-browser, #svg-radio,
    #svg-recently-added, #svg-artist, #svg-album,
    #svg-song, #svg-made-for-you {
      @apply fill-red-400;
    }
  }
</style>

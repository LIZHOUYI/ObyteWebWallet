<template>
  <div class="social">
    <div class="wrap">
      <div class="page-container">
        <div class="flex-col-vertical-center content">
          <div class="title">
            <h2>{{ $t("home.socialTitle") }}</h2>
            <h5>{{ $t("home.socialSubheading") }}</h5>
          </div>
          <div class="icons">
            <a
              v-for="(link, index) in links"
              :href="link.to"
              :key="link.name + index"
              target="_blank">
              <div :class="link.name">
                <img :src="link.img">
                <p>{{ link.name | capitalize }}</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import github from '@/assets/images/icons/github.png';
import reddit from '@/assets/images/icons/reddit.svg';
import slack from '@/assets/images/icons/slack.png';
import discord from '@/assets/images/icons/discord.png';

export default {
  data() {
    return {
      links: [
        {
          img: discord,
          to: 'http://discord.obyte.org',
          name: 'discord'
        },
        {
          img: slack,
          to: 'https://obyte.slack.com/',
          name: 'slack'
        },
        {
          img: reddit,
          to: 'https://www.reddit.com/r/obyte/',
          name: 'reddit'
        },
        {
          img: github,
          to: 'https://github.com/gcc2ge/obyteWebWallet/',
          name: 'github'
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import 'Social.scss';
</style>

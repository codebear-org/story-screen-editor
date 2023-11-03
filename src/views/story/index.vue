<template>
  <div class="bear-story">
    <div class="bear-story-header">
      <div>{{headForm.title}}</div>
      <div>github</div>
    </div>
    <div class="bear-story-content">
      <div class="bear-story-config"></div>
      <div class="bear-story-editor">
        <div class="bear-story-editor-body">
          <ul>
            <li v-for="(item, index) in story.editData" :key="index">{{item.title}}</li>
          </ul>
        </div>
      </div>
      <div class="bear-story-arrow" @click="handlePlay">添加</div>
      <div class="bear-story-view">
        <div class="bear-story-view-body">
          <ul>
            <li v-for="(item, index) in story.playData" :key="index">{{item.title}}</li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>
<script setup>
import { defineComponent, reactive, ref } from 'vue'
const headForm = reactive({
  title: '这是标题',
  github: 'https://github.com/codebear-org/story-screen-editor'
})

const story = reactive({
  sourceData: [
    {
      name: '人物',
      type: 'person',
      options: [
        {
          name: '男一'
        },
        {
          name: '男二'
        },
        {
          name: '女一'
        },
        {
          name: '女二'
        },
        {
          name: '路人'
        }
      ]
    },
    {
      name: '旁白',
      type: 'aside'
    },
    {
      name: '背景图片',
      type: 'bakground'
    },
    {
      name: '背景音乐',
      type: 'bgm'
    }
  ],
  editData: [
    {
      title: '紫萱',
      type: '',
      des: '这是标题0'
    },
    {
      title: '龙葵',
      des: '这是标题1'
    },
    {
      title: '景天',
      des: '这是标题2'
    },
    {
      title: '长卿',
      des: '这是标题3'
    },
    {
      title: '紫萱',
      des: '这是标题4'
    },
    {
      title: '龙葵',
      des: '这是标题5'
    },
    {
      title: '景天',
      des: '这是标题6'
    },
    {
      title: '长卿',
      des: '这是标题7'
    },
    {
      title: '紫萱',
      des: '这是标题8'
    },
    {
      title: '龙葵',
      des: '这是标题9'
    },
    {
      title: '景天',
      des: '这是标题10'
    },
    {
      title: '长卿',
      des: '这是标题11'
    },
    {
      title: '紫萱',
      des: '这是标题12'
    },
    {
      title: '龙葵',
      des: '这是标题13'
    },
    {
      title: '景天',
      des: '这是标题14'
    }
  ],
  index: 0,
  add: {
    dalogContens: [
      {
        aside: '旁白一（必填）',
        bigImg: '',
        mscUrl: '',
        vedioUrl: '',
        bgmName: '',
        bgmId: '',
        userLevel: '',
        photoPic: '',
        name: '',
        dalogCont: ''
      },
      {
        aside: '',
        mscUrl: '',
        vedioUrl: '',
        bigImg: '',
        photoPic: '254',
        name: '254',
        bgmName: '',
        bgmId: '',
        userLevel: '',
        dalogCont: '245'
      },
      {
        aside: '',
        mscUrl: '',
        vedioUrl: '',
        bigImg: '',
        photoPic: '587',
        name: '578',
        bgmName: '',
        bgmId: '',
        userLevel: 'b1',
        dalogCont: '57'
      }
    ]
  },
  playData: []
})
const handlePlay = () => {
  if (story.index == story.editData.length) {
    console.log('播放结束了')
    return
  }
  const item = story.editData[story.index]
  story.playData.push(item)
  story.index += 1
}
</script>

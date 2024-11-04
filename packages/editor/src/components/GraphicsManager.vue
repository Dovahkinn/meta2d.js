<template>
  <PropsTab v-model="activeTab" :tabs="tabs" @change="tabChange">
    <template #graphics>
      <Graphics />
    </template>

    <template #diagrams>
      <div class="panel__wrapper">
        <t-button block variant="outline" @click="showAddFolder('paper')">
          <t-icon name="add" slot="icon"></t-icon>
          新建目录
        </t-button>
        <br />
        <t-collapse v-if="blueprintList.length" defaultExpandAll>
          <t-collapse-panel
            v-for="item in blueprintList"
            :value="item.id"
            :header="item.dictName"
          >
            <template #headerRightContent>
              <t-tooltip content="新建图纸，将清空画布">
                <t-button
                  size="small"
                  variant="outline"
                  :style="{ marginLeft: '8px' }"
                  @click="addDiagram(item)"
                >
                  <t-icon name="chart-add"></t-icon>
                </t-button>
              </t-tooltip>

              <t-tooltip content="删除目录">
                <t-popconfirm
                  theme="danger"
                  content="操作后无法恢复, 确定要删除吗?"
                  @confirm="deleteFolder(item, 'paper')"
                >
                  <t-button
                    size="small"
                    variant="outline"
                    theme="danger"
                    :style="{ marginLeft: '8px' }"
                  >
                    <t-icon name="delete"></t-icon>
                  </t-button>
                </t-popconfirm>
              </t-tooltip>
            </template>

            <t-row v-if="item.data.length" :gutter="[10, 10]">
              <t-col
                v-for="(v, index) in item.data"
                :key="index"
                :span="6"
                @click="openDiagram(v)"
              >
                <t-tooltip content="单击打开图纸">
                  <t-image
                    overlayTrigger="hover"
                    :src="v.cover"
                    fit="contain"
                    :style="{ width: '100px', height: '100px' }"
                  >
                    <template #overlayContent>
                      <t-popconfirm
                        theme="danger"
                        content="操作后无法恢复, 确定要删除吗?"
                        @confirm="deleteMyPen(v, 'paper')"
                      >
                        <t-button
                          size="small"
                          variant="outline"
                          theme="danger"
                          :style="{ float: 'right' }"
                          @click.stop="() => null"
                        >
                          <t-icon name="delete"></t-icon>
                        </t-button>
                      </t-popconfirm>
                    </template>
                  </t-image>
                </t-tooltip>
              </t-col>
            </t-row>

            <t-empty v-else description=""></t-empty>
          </t-collapse-panel>
        </t-collapse>
        <t-empty v-else description=""></t-empty>
      </div>
    </template>

    <template #my-pens>
      <div class="panel__wrapper">
        <t-button block variant="outline" @click="showAddFolder('component')">
          <t-icon name="add" slot="icon"></t-icon>
          新建目录
        </t-button>
        <br />
        <t-collapse v-if="componentList.length" defaultExpandAll>
          <t-collapse-panel
            v-for="item in componentList"
            :value="item.id"
            :header="item.dictName"
          >
            <template #headerRightContent>
              <t-upload
                ref="uploadRef"
                v-model="uploadValue"
                :action="
                  $attrs.uploadUrl ||
                  'https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo'
                "
                :headers="headers"
                :sizeLimit="sizeLimit"
                name="object"
                theme="custom"
                accept="image/*"
                style="display: inline-flex"
                @fail="handleFail"
                @success="handleSuccess"
              >
                <t-tooltip content="请选择单张小于1MB的图片上传">
                  <t-button
                    size="small"
                    variant="outline"
                    :style="{ marginLeft: '8px' }"
                    @click="setFolder(item)"
                  >
                    <t-icon name="upload"></t-icon>
                  </t-button>
                </t-tooltip>
              </t-upload>

              <t-tooltip content="删除目录">
                <t-popconfirm
                  theme="danger"
                  content="操作后无法恢复, 确定要删除吗?"
                  @confirm="deleteFolder(item, 'component')"
                >
                  <t-button
                    size="small"
                    variant="outline"
                    theme="danger"
                    :style="{ marginLeft: '8px' }"
                  >
                    <t-icon name="delete"></t-icon>
                  </t-button>
                </t-popconfirm>
              </t-tooltip>
              <t-tooltip content="公开目录下的所有组件">
                  <t-button
                    size="small"
                    variant="outline"
                    theme="primary"
                    :style="{ marginLeft: '8px' }"
                  >
                    <t-icon name="folder-shared"></t-icon>
                  </t-button>
              </t-tooltip>
            </template>

            <t-row v-if="item.data.length" :gutter="[10, 10]">
              <t-col
                v-for="(v, index) in item.data"
                :key="index"
                :span="6"
                :draggable="true"
                @dragstart="dragStart($event, v)"
              >
                <t-tooltip :content="v.name">
                  <t-image
                    :src="v.cover"
                    overlayTrigger="hover"
                    fit="contain"
                    :style="{ width: '100px', height: '100px' }"
                  >
                    <template #overlayContent>
                      
                      <t-popconfirm
                        theme="danger"
                        content="操作后无法恢复, 确定要删除吗?"
                        @confirm="deleteMyPen(v, 'component')"
                      >
                        <t-button
                          size="small"
                          variant="outline"
                          theme="danger"
                          :style="{ float: 'right' }"
                          @click.stop="() => null"
                        >
                          <t-icon name="delete"></t-icon>
                        </t-button>
                      </t-popconfirm>
                      <t-tooltip
                        content="公开组件给所有人"
                        @confirm="deleteMyPen(v, 'component')"
                      >
                        <t-button
                          size="small"
                          variant="outline"
                          theme="primary"
                          :style="{ float: 'right', marginRight: '4px' }"
                          @click.stop="shareMyPen(v)"
                        >
                          <t-icon name="share"></t-icon>
                        </t-button>
                      </t-tooltip>
                    </template>
                  </t-image>
                </t-tooltip>
              </t-col>
            </t-row>
            <t-empty v-else></t-empty>
          </t-collapse-panel>
        </t-collapse>
        <t-empty v-else description=""></t-empty>
      </div>
    </template>
  </PropsTab>

  <t-dialog
    v-model:visible="visible"
    :header="selectMode ? '选择目录' : '新建目录'"
    @confirm="confirm"
    @closed="close"
  >
    <t-input
      v-if="!selectMode"
      v-model="folderName"
      placeholder="请输入目录名称"
      maxlength="20"
      clearable
    ></t-input>
    <template v-else>
      <t-select v-model="folderName" :options="folderOptions"></t-select>
      <br />
      <t-input v-model="fileName" placeholder="请输入图纸/组件名称"></t-input>
    </template>
  </t-dialog>
</template>
<script setup lang="ts">
import { computed, defineProps, reactive, ref } from "vue";
import Graphics from "./Graphics.vue";
import PropsTab from "./PropsTab.vue";
import { useData } from "../services/useGraphics";
import { useUpload } from "../services/useUpload";
import { NotifyPlugin, Button } from "tdesign-vue-next";

const props = defineProps({});

const tabs = [
  {
    label: "图纸",
    value: 1,
    slot: "diagrams",
    code: "paper",
  },
  {
    label: "内置组件",
    value: 2,
    slot: "graphics",
  },
  {
    label: "我的组件",
    value: 3,
    slot: "my-pens",
    code: "component",
  },
];
const activeTab = ref(2);

const {
  blueprintList,
  componentList,
  visible,
  folderName,
  showAddFolder,
  deleteMyPen,
  confirm,
  close,
  selectMode,
  selectType,
  deleteFolder,
  getTree,
  fileName,
  saveImageComponent,
} = useData();

const tabChange = (value: number) => {
  const tab = tabs.find((item) => item.value === value);
  if (tab && tab.code) {
    const code = tab.code;
    getTree(code);
  }
};

const folderOptions = computed(() => {
  let list = [];
  if (selectType.value == "paper") {
    list = blueprintList.value;
  } else {
    list = componentList.value;
  }
  return list.map((item: any) => {
    return {
      label: item.dictName,
      value: item.id,
    };
  });
});

const { uploadValue, headers, sizeLimit, handleFail } = useUpload();

let targetFolder: any = null;
const setFolder = (data: any) => {
  console.log("set folder: ", data);
  targetFolder = data;
};
const handleSuccess = (context: any) => {
  if (context.response) {
    // 创建 pen
    const image = context.response.url || context.response.data?.fileurl;
    const data = {
      name: "image",
      image,
      relativePath: context.response.data?.relativePath,
      fileName: context.response.data?.fileName,
      width: 100,
      height: 100,
      x: 100,
      y: 100,
    };

    saveImageComponent(targetFolder, data);
  }
};

/**
 * @description 我的组件，拖拽
 * @param e
 * @param elem 图片或组合
 */
const dragStart = async (e: any, elem: any) => {
  if (!elem || !elem.data) {
    return;
  }
  e.stopPropagation();
  // console.log("dragStart elem: ", elem);
  let data;
  try {
    if (typeof elem.data === "string") {
      data = JSON.parse(elem.data);
    } else if (typeof elem.data === "object") {
      data = elem.data;
    }
  } catch (error) {
    console.log("dragStart error: ", error);
  }

  if (!data) return;

  // 拖拽事件
  if (e instanceof DragEvent) {
    // 设置拖拽数据
    e.dataTransfer?.setData("Meta2d", JSON.stringify(data));
  } else {
    // 支持单击添加图元。平板模式
    // 需要单击画布
    meta2d.canvas.addCaches = [data];
  }
};

const addDiagram = (item: any) => {
  console.log("addDiagram: ", item);
  if (!item.children) {
    item.children = [];
  }
  meta2d.clear();
  meta2d.emit("clear");
};

const openDiagram = (item: any) => {
  const p = NotifyPlugin("warning", {
    content: "系统可能不会保存您所做的更改，是否继续？",
    title: "提示",
    placement: "top-right",
    duration: 0,
    closeBtn: true,
    footer(h) {
      return h(
        "div",
        {
          style: "text-align: right",
        },
        [
          h(
            Button,
            {
              onClick: () => {
                let json;
                try {
                  json = JSON.parse(item.data);
                } catch (error) {
                  console.log("open diagram error: ", error);
                }
                meta2d.open(json);
                meta2d.emit("clear");
                meta2d.fitView();
                p.then((instance) => {
                  instance.close();
                  meta2d.render(true);
                });
              },
            },
            "确定",
          ),
        ],
      );
    },
  });
};


const shareMyPen = (item: any) => {
  console.log("shareMyPen: ", item);
  
}
</script>
<style lang="postcss" scoped>
.panel__wrapper {
  padding: 10px;

  :deep(.t-button) .t-button__text {
    align-items: center;
  }
  .t-image__wrapper {
    border: #eee 1px solid;
  }
}
</style>

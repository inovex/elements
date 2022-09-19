<template>
    <div class="root">
        <div class="filter-button">
            <ino-button variant="text" dense id="popover-interactive-target">
                <ino-icon icon="filter" slot="icon-leading"></ino-icon>
                    Label
            </ino-button>
            <ino-popover trigger="click" for="popover-interactive-target" color-scheme="transparent" interactive="" placement="bottom" distance="8">
                <div class="interactive-popover">
                    <ino-list>
                        <ino-list-item v-for="manufactorer in manufactorers" :text="manufactorer" :key="manufactorer">
                            <ino-checkbox slot="leading" :checked="matches(manufactorer)" name={{manufactorer}} value={{manufactorer}} @click="checkboxHandler(manufactorer)"></ino-checkbox>
                        </ino-list-item>
                    </ino-list>
                </div>
            </ino-popover>
        </div>
    </div>
</template>
<script>

import {InoButton} from "@inovex.de/elements-vue";
import {InoIcon} from "@inovex.de/elements-vue";
import {InoList} from "@inovex.de/elements-vue";
import {InoListItem} from "@inovex.de/elements-vue";
import {InoPopover} from "@inovex.de/elements-vue";
import {InoCheckbox} from "@inovex.de/elements-vue";



export default {
    name: 'MyTest',
    components: {
        InoButton,
        InoIcon,
        InoList,
        InoListItem,
        InoPopover,
        InoCheckbox
    },
    data () {
        return {
        textInput: '',
        selectedManufactorer: [],
        hardwareList: [
            {
            id: 0,
            manufactorer: 'Apple',
            resolution: 'FullHD',
            displaySize: '34"',
            proccessor: 'M2 Chip with 10-Core GPU'
            },
            {
            id: 0,
            manufactorer: 'ThinkPat',
            resolution: 'FullHD',
            displaySize: '34"',
            proccessor: 'M2 Chip with 10-Core GPU'
            },
            {
            id: 0,
            manufactorer: 'Apple',
            resolution: 'FullHD',
            displaySize: '34"',
            proccessor: 'M2 Chip with 10-Core GPU'
            }
        ]
        }
    },
    mounted() {
        this.manufactorers = [...new Set(this.hardwareList.map(v => v.manufactorer))]; 
    },
    methods: {
        checkboxHandler(manufactorer) {
            if (this.matches(manufactorer)){
                this.selectedManufactorer.pop(manufactorer);
            } else {
                this.selectedManufactorer.push(manufactorer);    
            }
        },
        matches(manufactorer) {       
            return this.selectedManufactorer.indexOf(manufactorer) !== -1;
        }
    }
}
</script>
<style scoped>

    .root {
        display: flex;
    }
    ino-button {
        display: inline-block;
    }

</style>
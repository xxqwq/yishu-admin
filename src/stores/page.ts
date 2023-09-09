import { defineStore } from 'pinia'
import router from '@/router'

interface Page {
  name: string
  path: string
  index: number
}
const defaultPage: Page = {
  name: '首页',
  path: '/dashboard',
  index: 0
}
export default defineStore('page', {
  state: (): {
    pageList: Page[]
    currentPage: Page
  } => ({
    pageList: [defaultPage],
    currentPage: defaultPage
  }),
  actions: {
    addPage(page: Page) {
      const paths: string[] = []
      for (const item of this.pageList) {
        if (!paths.includes(item.path)) {
          paths.push(item.path)
        }
      }
      if (!paths.includes(page.path)) {
        this.pageList.push(page)
      }
      router.push(page.path)
    },
    deletePage(index: number) {
      this.pageList.splice(index, 1)
      this.setActivePage(index - 1)
    },
    setActivePage(index: number) {
      this.currentPage = this.pageList[index] || defaultPage
      router.push(this.currentPage.path)
    }
  }
})

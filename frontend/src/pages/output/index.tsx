import { GetServerSideProps } from 'next/types'
import Description from '../../components/Description/Description'
import OutputComponent from '../../components/OutputComponent/OutputComponent'
import Tabs, { TabsId } from '../../components/PagesTabs/PagesTabs'
import Seo from '../../components/Seo'
import {
  OutputContainer,
  OutputTabsContainer,
  TabWrapper,
} from '../../components/Wrappers'
import AuthedDashboard from '../../layouts/AuthedDashboard'
import Api from '../../utils/api'
import AxiosErrorHoc, { wrapAxiosErrors } from '../../components/AxiosErrorHoc'

const Page = ({ tasks, ...props }: any) => {
  return (
    <>
      <Seo {...props} title={'Output'} />

      <AuthedDashboard {...props}>
        <OutputTabsContainer>
          <Description {...props} />
          <Tabs initialSelectedTab={TabsId.OUTPUT} />
        </OutputTabsContainer>
        <OutputContainer>
          <TabWrapper>
            <OutputComponent {...props} tasks={tasks} />
          </TabWrapper>
        </OutputContainer>
      </AuthedDashboard>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = wrapAxiosErrors(async ({}) => {
  const { data } = await Api.getTasks()
  return {
    props: { tasks: data },
  }
})
export default AxiosErrorHoc(Page)

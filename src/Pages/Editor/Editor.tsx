import { View } from './View';
import css from './Editor.module.scss';
import { Attributes } from './Attributes';
import { ComponentBank } from './ComponentBank';
import { Button, PageHeader, Layout } from 'antd';
const { Content, Header, Footer } = Layout;

export const Editor = () => {
  return (
    <Layout style={{ height: '100%' }}>
      <PageHeader
        ghost={false}
        onBack={() => window.history.back()}
        title="dnde"
        subTitle=""
        style={{ borderBottom: '1px solid #e8e8e8' }}
        extra={[
          <Button key="2" type="primary">
            Send Test Mail
          </Button>,
          <Button key="1">Copy as html</Button>,
        ]}
      ></PageHeader>
      <Content>
        <div className={css.editor}>
          <div className={css.bank}>
            <ComponentBank />
          </div>
          <div className={css.view}>
            <View />
          </div>
          <div className={css.attributes}>
            <Attributes />
          </div>
        </div>
      </Content>
    </Layout>
  );
};

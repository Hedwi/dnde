import { Row } from 'antd';
import styled from 'styled-components';

const style = {
  display: 'flex',
  height: '16px',
  borderRadius: '0px',
};

const borderRight = '1px solid rgb(85, 85, 85)';

const ColumnSelector = () => {
  return (
    <>
      <div>
        <SectionTitle>
          <p>1 Columns</p>
        </SectionTitle>
        <Image one={50} />
      </div>
      <div style={{ marginTop: '16px' }}>
        <SectionTitle>
          <p>2 Columns</p>
        </SectionTitle>
        <Image one={50} two={50} />
        <Image one={40} two={60} />
        <Image one={25} two={75} />
        <Image one={60} two={40} />
        <Image one={75} two={25} />
      </div>
      <div style={{ marginTop: '16px' }}>
        <SectionTitle>
          <p>3 Columns</p>
        </SectionTitle>
        <Image one={50} two={50} three={50} />
        <Image one={25} two={25} three={50} />
        <Image one={25} two={50} three={25} />
        <Image one={50} two={25} three={25} />
      </div>
      <div style={{ marginTop: '16px' }}>
        <SectionTitle>
          <p>4 Columns</p>
        </SectionTitle>
        <Image one={50} two={50} three={50} four={50} />
      </div>
    </>
  );
};

const Image = ({ one, two, three, four }: { one: number; two?: number; three?: number; four?: number }) => {
  return (
    <>
      <Row style={{ marginBottom: '12px' }}></Row>
      <SectionImage>
        <div className="wrapper">
          <div className="border">
            <div style={{ ...style, flexGrow: one, borderRight: two ? borderRight : 'unset' }}></div>
            {two ? <div style={{ ...style, flexGrow: two, borderRight: three ? borderRight : 'unset' }}></div> : null}
            {three ? (
              <div style={{ ...style, flexGrow: three, borderRight: four ? borderRight : 'unset' }}></div>
            ) : null}
            {four ? <div style={{ ...style, flexGrow: two }}></div> : null}
          </div>
        </div>
      </SectionImage>
    </>
  );
};

const SectionTitle = styled(Row)`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  p {
    margin: 0px;
    text-align: inherit;
    color: rgb(85, 85, 85);
    font-size: 14px;
    font-weight: 600;
  }
`;

const SectionImage = styled(Row)`
  background-color: rgb(252, 252, 252);
  border: 1px solid rgb(229, 229, 229);
  border-radius: 3px;
  box-sizing: border-box;
  display: flex;
  box-shadow: none;
  cursor: grab;

  &:hover {
    background-color: rgb(255, 255, 255);
    box-shadow: rgb(0 0 0 / 20%) 0px 1px 4px;
    border-color: rgb(255, 255, 255);
  }

  .wrapper {
    margin: 10px;
    background-color: rgb(255, 255, 255);
    position: relative;
    width: 100%;
    display: flex;
    border-radius: 3px;
    box-sizing: border-box;

    .border {
      border: 1px solid rgb(85, 85, 85);
      border-radius: 3px;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
    }
  }
`;

export { ColumnSelector };
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button,Modal, Form, Input } from 'antd';
import { Select } from 'antd';
import { Radio, Space } from 'antd';
import React from 'react';
import { useState } from 'react';
import {PoweroffOutlined} from '@ant-design/icons'
import fb from './facebook.svg'; // gives image path
import '../App.css';
const Hello =()=>{
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [value, setValue] = useState(1);

  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
    const { Option } = Select;
    const handleChange = (value) => {
        console.log(`selected ${value}`);
      };
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
      };
   
    return(
        <>
            <div className="main">
                <div className="left-side">
                    <img className='img-facebook' src={fb} alt="this is fb image" />
                    
                    <h2 className="text">Facebook helps you connect and share <br/> with the people in your life.</h2>
                </div>
            
             <div className="right-side">s
                    <div className="box">
                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                            >
                            <Form.Item
                                name="username"
                                
                                rules={[
                                {
                                    
                                    required: true,
                                    message: 'Please input your Username!',
                                },
                                ]}
                            >
                                <Input className="username" prefix={<UserOutlined className="site-form-item-icon" />}  id="inputID" placeholder="Email Address Or Phone Number " />
                            </Form.Item>
                            <Form.Item
                                className="password"
                                name="password"
                                rules={[
                                {
                                    required: true,
                                    message: 'Please input your Password!',
                                },
                                ]}
                            >
                                <Input className='password'
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                id="inputID"
                                placeholder="Password"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" block htmlType="submit" className="login-form-button btn1">
                                Log in
                                </Button>
                               
                            </Form.Item>
                            <Form.Item>
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                
                                </Form.Item>
                                
                                <a  className="login-form-forgot forget" href="">
                                Forgot password
                                </a>
                            </Form.Item>
                           
                            <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button btn2" onClick={showModal}>
                               Create New Account
                            </Button>
                            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                                    <Form
                                    name="normal_login"
                                    className="login-form"
                                    initialValues={{
                                        remember: true,
                                    }}
                                    onFinish={onFinish}
                                    >
                                    <h3>Sign Up</h3>
                                    <h5>It's quick and easy.</h5>
                                    <Form.Item
                                        name="username"
                                        
                                        rules={[
                                        {
                                            
                                            required: true,
                                            message: 'Please input your Username!',
                                        },
                                        ]}
                                    >
                                        <Input className='reguser' prefix={<UserOutlined className="site-form-item-icon" />}  id="inputID" placeholder="First Name " />
                                    </Form.Item>
                                    <Form.Item
                                        className="password"
                                        name="password"
                                        rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Password!',
                                        },
                                        ]}
                                    >
                                        <Input className='regpass'
                                        prefix={<LockOutlined className="site-form-item-icon" />}
                                        type="password"
                                        id="inputID"
                                        placeholder="Surname"
                                        />
                                    </Form.Item>
                                    <Form.Item
                                        className="mobile"
                                        name="mobile"
                                        rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Mobile nO!',
                                        },
                                        ]}
                                    >
                                        <Input className='mobile'
                                        
                                        type="text"
                                        id="inputID"
                                        placeholder="Enter Your mobile No"
                                        />
                                    </Form.Item>
                                    <Form.Item>
                                    <Select defaultValue="01" style={{ width: 120 }} onChange={handleChange}>
                                    <Option value='01'>01</Option>
                                    <Option value='02'>02</Option>
                                    <Option value='03'>03</Option>
                                    <Option value='04'>04</Option>
                                    <Option value='05'>05</Option>
                                    <Option value='06'>06</Option>
                                    <Option value='07'>07</Option>
                                    <Option value='08'>08</Option>
                                    <Option value='09'>09</Option>
                                    <Option value='10'>10</Option>
                                    <Option value='11'>11</Option>
                                    <Option value='12'>12</Option>
                                    <Option value='13'>13</Option>
                                    <Option value='14'>14</Option>
                                    <Option value='15'>15</Option>
                                    <Option value='16'>16</Option>
                                    <Option value='17'>17</Option>
                                    <Option value='18'>18</Option>
                                    <Option value='19'>19</Option>
                                    <Option value='20'>20</Option>
                                    <Option value='21'>21</Option>
                                    <Option value='22'>22</Option>
                                    <Option value='23'>23</Option>
                                    <Option value='24'>24</Option>
                                    <Option value='25'>25</Option>
                                    <Option value='26'>26</Option>
                                    <Option value='27'>27</Option>
                                    <Option value='28'>28</Option>
                                    <Option value='29'>29</Option>
                                    <Option value='30'>30</Option>
                                    <Option value='31'>31</Option>
                                    </Select>
                                    <Select defaultValue="January" style={{ width: 120 }} onChange={handleChange}>
                                    <Option value='01'>January</Option>
                                    <Option value='02'>February</Option>
                                    <Option value='03'>March</Option>
                                    <Option value='04'>April</Option>
                                    <Option value='05'>May</Option>
                                    <Option value='06'>June</Option>
                                    <Option value='07'>July</Option>
                                    <Option value='08'>August</Option>
                                    <Option value='09'>September</Option>
                                    <Option value='10'>October</Option>
                                    <Option value='11'>November</Option>
                                    <Option value='12'>December</Option>
                                    </Select>
                                    <Select defaultValue="1900" style={{ width: 120 }} onChange={handleChange}>
                                    <Option value="2030">2030</Option>
                                    <Option value="2029">2029</Option>
                                    <Option value="2028">2028</Option>
                                    <Option value="2027">2027</Option>
                                    <Option value="2026">2026</Option>
                                    <Option value="2025">2025</Option>
                                    <Option value="2024">2024</Option>
                                    <Option value="2023">2023</Option>
                                    <Option value="2022">2022</Option>
                                    <Option value="2021">2021</Option>
                                    <Option value="2020">2020</Option>
                                    <Option value="2019">2019</Option>
                                    <Option value="2018">2018</Option>
                                    <Option value="2017">2017</Option>
                                    <Option value="2016">2016</Option>
                                    <Option value="2015">2015</Option>
                                    <Option value="2014">2014</Option>
                                    <Option value="2013">2013</Option>
                                    <Option value="2012">2012</Option>
                                    <Option value="2011">2011</Option>
                                    <Option value="2010">2010</Option>
                                    <Option value="2009">2009</Option>
                                    <Option value="2008">2008</Option>
                                    <Option value="2007">2007</Option>
                                    <Option value="2006">2006</Option>
                                    <Option value="2005">2005</Option>
                                    <Option value="2004">2004</Option>
                                    <Option value="2003">2003</Option>
                                    <Option value="2002">2002</Option>
                                    <Option value="2001">2001</Option>
                                    <Option value="2000">2000</Option>
                                    <Option value="1999">1999</Option>
                                    <Option value="1998">1998</Option>
                                    <Option value="1997">1997</Option>
                                    <Option value="1996">1996</Option>
                                    <Option value="1995">1995</Option>
                                    <Option value="1994">1994</Option>
                                    <Option value="1993">1993</Option>
                                    <Option value="1992">1992</Option>
                                    <Option value="1991">1991</Option>
                                    <Option value="1990">1990</Option>
                                    <Option value="1989">1989</Option>
                                    <Option value="1988">1988</Option>
                                    <Option value="1987">1987</Option>
                                    <Option value="1986">1986</Option>
                                    <Option value="1985">1985</Option>
                                    <Option value="1984">1984</Option>
                                    <Option value="1983">1983</Option>
                                    <Option value="1982">1982</Option>
                                    <Option value="1981">1981</Option>
                                    <Option value="1980">1980</Option>
                                    <Option value="1979">1979</Option>
                                    <Option value="1978">1978</Option>
                                    <Option value="1977">1977</Option>
                                    <Option value="1976">1976</Option>
                                    <Option value="1975">1975</Option>
                                    <Option value="1974">1974</Option>
                                    <Option value="1973">1973</Option>
                                    <Option value="1972">1972</Option>
                                    <Option value="1971">1971</Option>
                                    <Option value="1970">1970</Option>
                                    <Option value="1969">1969</Option>
                                    <Option value="1968">1968</Option>
                                    <Option value="1967">1967</Option>
                                    <Option value="1966">1966</Option>
                                    <Option value="1965">1965</Option>
                                    <Option value="1964">1964</Option>
                                    <Option value="1963">1963</Option>
                                    <Option value="1962">1962</Option>
                                    <Option value="1961">1961</Option>
                                    <Option value="1960">1960</Option>
                                    <Option value="1959">1959</Option>
                                    <Option value="1958">1958</Option>
                                    <Option value="1957">1957</Option>
                                    <Option value="1956">1956</Option>
                                    <Option value="1955">1955</Option>
                                    <Option value="1954">1954</Option>
                                    <Option value="1953">1953</Option>
                                    <Option value="1952">1952</Option>
                                    <Option value="1951">1951</Option>
                                    <Option value="1950">1950</Option>
                                    <Option value="1949">1949</Option>
                                    <Option value="1948">1948</Option>
                                    <Option value="1947">1947</Option>
                                    <Option value="1946">1946</Option>
                                    <Option value="1945">1945</Option>
                                    <Option value="1944">1944</Option>
                                    <Option value="1943">1943</Option>
                                    <Option value="1942">1942</Option>
                                    <Option value="1941">1941</Option>
                                    <Option value="1940">1940</Option>
                                    <Option value="1939">1939</Option>
                                    <Option value="1938">1938</Option>
                                    <Option value="1937">1937</Option>
                                    <Option value="1936">1936</Option>
                                    <Option value="1935">1935</Option>
                                    <Option value="1934">1934</Option>
                                    <Option value="1933">1933</Option>
                                    <Option value="1932">1932</Option>
                                    <Option value="1931">1931</Option>
                                    <Option value="1930">1930</Option>
                                    <Option value="1929">1929</Option>
                                    <Option value="1928">1928</Option>
                                    <Option value="1927">1927</Option>
                                    <Option value="1926">1926</Option>
                                    <Option value="1925">1925</Option>
                                    <Option value="1924">1924</Option>
                                    <Option value="1923">1923</Option>
                                    <Option value="1922">1922</Option>
                                    <Option value="1921">1921</Option>
                                    <Option value="1920">1920</Option>
                                    <Option value="1919">1919</Option>
                                    <Option value="1918">1918</Option>
                                    <Option value="1917">1917</Option>
                                    <Option value="1916">1916</Option>
                                    <Option value="1915">1915</Option>
                                    <Option value="1914">1914</Option>
                                    <Option value="1913">1913</Option>
                                    <Option value="1912">1912</Option>
                                    <Option value="1911">1911</Option>
                                    <Option value="1910">1910</Option>
                                    <Option value="1909">1909</Option>
                                    <Option value="1908">1908</Option>
                                    <Option value="1907">1907</Option>
                                    <Option value="1906">1906</Option>
                                    <Option value="1905">1905</Option>
                                    <Option value="1904">1904</Option>
                                    <Option value="1903">1903</Option>
                                    <Option value="1902">1902</Option>
                                    <Option value="1901">1901</Option>
                                    <Option value="1900">1900</Option>
                                    </Select>
                                    </Form.Item>
                                    <Form.Item>
                                    <Radio.Group onChange={onChange} value={value}>
                                        <Space direction="horizontal">
                                            
                                            <Radio className='f' value={1}>Female</Radio>
                                            <Radio className='f' value={2}>Male</Radio>
                                            <Radio className='f' value={3}>Other</Radio>
                                            
                                        </Space>
                                        </Radio.Group>
                                    </Form.Item>
                                    <Form.Item>
                                    <Select defaultValue="Select your pronoun">
                                        <Option value="" >Select your pronoun</Option>
                                        <Option value="1">She: "Wish her a happy birthday!"
                                        </Option>
                                        <Option value="2">He: "Wish him a happy birthday!"</Option>
                                        <Option value="6">They: "Wish them a happy birthday!"</Option>
                                        </Select>
                                        <p>Your pronoun is visible to everyone</p>
                                    </Form.Item>
                                    
                                    <Form.Item
                                        name="optional"
                                        
                                        rules={[
                                        {
                                            
                                            required: true,
                                            message: 'Please input your Username!',
                                        },
                                        ]}
                                    >
                                        <Input prefix={<UserOutlined className="site-form-item-icon" />}  id="inputID" placeholder="Gender (optional)" />
                                        <p>
                                        People who use our service may have uploaded your contact information to Facebook. Learn more.

                                        By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS Notifications from us and can opt out any time.
                                        </p>
                                    </Form.Item>
                                    <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button btn3">
                                Sign Up
                                </Button>
                               
                            </Form.Item>

                                   
                                 
                                
                                

                                
                                </Form>
                            </Modal>
                                
                              
                               
                            </Form.Item>

                           
                        </Form>

                    </div>   
                </div> 
            </div>
        </>
    );
}
export default Hello;
    
   


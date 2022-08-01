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
import Signup from './Signup';
const Login =()=>{
    const [isModalVisible, setIsModalVisible] = useState(false);
 

 
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
                          
                                
                              
                               
                            </Form.Item>

                           
                        </Form>


                    </div>   
                </div> 
                <Modal footer={[]} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                                <Signup/>
                            </Modal>
            </div>
        </>
    );
}
export default Login;
    
   


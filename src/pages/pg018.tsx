import { GetStaticProps, NextPage, PageConfig } from 'next';
import Head from 'next/head';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, EffectCoverflow, Keyboard } from 'swiper/core';
import Navigation from '../components/c003';

SwiperCore.use([Autoplay, Keyboard, EffectCoverflow]);

// Import Swiper styles
import 'swiper/swiper.min.css';

interface IProps {
}

/**
 * 企业简介
 */
const page: NextPage<IProps> = () => {
	return (
		<>
			<Head>
				<title>企业简介</title>
			</Head>
			<Navigation />
			<C001></C001>
			<C002></C002>
		</>
	);
};

export const config: PageConfig = {
	amp: false
};

export default page;

export const getStaticProps: GetStaticProps<IProps> = async () => {
	return Promise.resolve({
		props: {},
		revalidate: 60 * 60 * 24 // 1 day
	});
};

/**
 * 轮播图
 */
function C001() {
	return <>
		<Swiper
			spaceBetween={50}
			slidesPerView={1}
			autoplay
			keyboard
			onSlideChange={() => console.log('slide change')}
			onSwiper={(swiper) => console.log(swiper)}
		>
			<SwiperSlide><img src='/api/getfile/bf8ac344-a6be-4d71-839b-d155a7200ffe' /></SwiperSlide>
			<SwiperSlide><img src='/api/getfile/dd' /></SwiperSlide>
			<SwiperSlide><img src='/api/getfile/dd' /></SwiperSlide>
			<SwiperSlide><img src='/api/getfile/dd' /></SwiperSlide>
		</Swiper>
	</>;
}

/**
 * 简介
 */
function C002() {
	return <>
		<div id="Introduction" className="bg-f pos-r p20">
			<div className="flex-cc  s001">
				<div className="s002">
				</div>
			</div>
			<div className="font23 flex-cc display-ib color-3 s003">
				<span className="s004">
					公司简介
			</span>
			</div>
			<div data-feidao-presentation="P02" className="display-ib ql-editor fwb font14 s005"><p className="ql-align-justify">金税信息技术服务股份有限公司成立于2003年，注册资金5008万元人民币，是原新三板挂牌的服务性高新技术企业（股票简称：金税股份，股票代码：870310），现已在广东省证监局辅导备案（编号：【2019】031号），即将于2020-2021年在创业板或科创板上市。金税股份是国家人工智能标准化总体组、全国信标委信息技术服务标准工作组及云计算标准工作组全权成员单位、广东省高新技术企业及双软企业（软件企业、软件产品）、计算机信息系统集成一级及全国首批 ITSS信息技术服务运行维护标准符合性评估成熟度二级企业，作为省市两级创新型企业，在通过了CMMI-L5 软件成熟度认定和一系列ISO管理体系认证资质后，已成功组建成为“广东省工程技术研究中心”、“广东省省级企业技术中心”，获得”广州市科技进步一等奖“，承接十多项各级政府支持科技专项，获得“中国IT服务十大创新企业”、“中国IT服务十大领军人物”、“ITSS研制优秀单位”、“中国IT服务优秀应用案例”、“2018中国IT服务创新产品奖”等荣誉。公司主要从事 IT综合运维服务、行业应用软件开发及服务、计算机信息系统集成工程、 智能产品及外设销售等业务，是一家在信息产业内多方向发展的软件及信息技术服务企业，在业界及客户都有着良好的口碑及业绩。
			金税股份以自主研发的具有自有知识产权的智能服务管理软件产品为核心，IT综合运维服务业务及系统集成业务为主业，打造先进的泛IT、移动互联、云智能服务平台运营模式和管理体系，成为国内领先的基于大数据、人工智能、物联网技术的IT综合服务供应商。
</p></div>
		</div>
		<style jsx>{`
.s001 { margin-top: 20px }
.s002 { width: 20%;height: 5px;background-color: #dddddd;border-radius: 5px; }
.s003 { font-size: 23px; margin-top: 20px }
.s004 { margin-bottom: 20px }
.s005 { width: 100%; }
`}</style>
	</>;
}

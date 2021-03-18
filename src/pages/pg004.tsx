import { GetStaticProps, NextPage, PageConfig } from 'next';
import Head from 'next/head';
import an49 from '@mmstudio/an000049';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Swiper as Core, EffectCoverflow, Keyboard } from 'swiper';
import SwiperCore, { Autoplay, EffectCoverflow, Keyboard } from 'swiper/core';
import Header from '../components/c003';
import 'swiper/swiper.min.css';

interface IProps {
	dt1: Pick<ITbcarousel_map, 'picture_name' | 'picture_address' | 'associated_num'>[];
	dt2: Pick<ITbcompany_profile, 'compony_profile_id' | 'compony_profile_content'>[];
}

/**
 * 公司简介
 */
const page: NextPage<IProps> = ({ dt1, dt2 }) => {
	return (
		<>
			<Head>
				<title>公司简介</title>
			</Head>
			<Header />
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
	const db = an49();

	// 轮播图
	const tb1 = db<ITbcarousel_map>('carousel_map');
	const r1 = await tb1.select('picture_name', 'picture_address', 'associated_num').where({
		is_show: 1,
		check_state: 200
	}).orderBy('picture_order', 'asc');

	const dt1 = r1.map((r) => {
		return { ...r };
	});

	// 公司简介2
	const tb2 = db<ITbcompany_profile>('company_profile');
	const r2 = await tb2.select('compony_profile_id', 'compony_profile_content').where({
		is_show: 1,
		check_state: 200
	}).orderBy('update_time', 'desc').limit(199);
	const dt2 = r2.map((r) => {
		return { ...r };
	});
	console.log(dt2);
	return {
		props: {
			dt1,
			dt2
		},
		revalidate: 60 * 60 * 24 // 1 day
	};
};

/**
 * 右侧导航
 */
function C001() {
	return <>
		<div className="right-nav">
			<div className="w">
				<ul className="right-nav-list1">
					<li><a><i className="icon iconfont icon-shouye font20"></i></a>
						<div>金税简介</div>
					</li>
					<li><a><i className="icon iconfont icon-zuzhijiagou font20"></i></a>
						<div>组织架构</div>
					</li>
					<li><a><i className="icon iconfont icon-yewu font20"></i></a>
						<div>主营业务</div>
					</li>
					<li><a><i className="icon iconfont icon-kehu font20"></i></a>
						<div>行业客户</div>
					</li>
					<li><a><i className="icon iconfont icon-renyuanguanli font20"></i></a>
						<div>合作伙伴</div>
					</li>
					<li><a><i className="icon iconfont icon-book font20"></i></a>
						<div>发展史</div>
					</li>
				</ul>
			</div>
		</div>
		<style jsx>{`
ul li:before {
	content: '';
}
`}</style>
	</>;
}

/**
 * 主体
 */
function C002() {
	return <>
		<div className="margin-0a  s001">
			<C003></C003>
			<C004></C004>
		</div>
		<style jsx>{`
.s001 { margin-top:20px;width: 1200px }
`}</style>
	</>;
}

/**
 * 面包屑
 */
function C003() {
	return <>
		<div className="ht40 bg-f flex-c font14 color-3 s001">
			<i className="iconfont icon-shouye color-3 font20 s002"></i>
			<span>公司宣传</span>
		</div>
		<style jsx>{`
.s001 { padding:0 20px;margin-bottom: 20px }
.s002 { margin-right:10px }
`}</style>
	</>;
}

/**
 * 内容
 */
function C004() {
	return <>
		<C005></C005>
		<C006></C006>
		<C007></C007>
		<C008></C008>
		<C009></C009>
		<C010></C010>
		<C011></C011>
	</>;
}

/**
 * 轮播图
 */
function C005() {
	SwiperCore.use([Autoplay, Keyboard, EffectCoverflow]);
	return <>
		<Swiper
			className="s001"
			spaceBetween={10}
			slidesPerView={1}
			// autoplay={true}
			autoplay={{
				delay: 3000,
				waitForTransition: false,
				reverseDirection: false,
				stopOnLastSlide: false,
				disableOnInteraction: true
			}}
			keyboard={{
				enabled: true,
				onlyInViewport: true,
				pageUpDown: true
			}}
			effect='coverflow'
			speed={800}
		>
			<SwiperSlide><img src="/images/lb1.png" /></SwiperSlide>
			<SwiperSlide><img src="/images/lb1.png" /></SwiperSlide>
			<SwiperSlide><img src="/images/lb1.png" /></SwiperSlide>
			<SwiperSlide><img src="/images/lb1.png" /></SwiperSlide>
			<SwiperSlide><img src="/images/lb1.png" /></SwiperSlide>
			<SwiperSlide><img src="/images/lb1.png" /></SwiperSlide>
		</Swiper>
		<style jsx>{`
.s001 {  width:1200px ;height:360px }
`}</style>
	</>;
}

/**
 * 简介内容
 */
function C006() {
	return <>
		<div className="bg-f s001">
			<div className="font30 flex-cc display-ib color-3">
				<span>
					金税简介
				</span>
			</div>
			<div className="flex-cc  s002">
				<div className="s003">
				</div>
			</div>
			<div className="color-6">
				<p className="font14 flex-cc display-ib l-ht40 s004">
					公司秉承“诚信责任，成就客户，创造价值”的经营理念，始终坚持在自主产品和服务体
					系方面加大投入。迄今为止，移动应用、 IT
					服务管理和数据交换平台三个平台及应用产品日趋成熟，在金融、政府、教育等行业也成了特色集成解决方案，并借助独特的自有产品和优质的服务，与广东省上百家政府机构、银行、电讯运营商及商业企业客户建立了规范和密切的合作关系。同时，由于在移动应用和
					IT 运维领域公认的领先地位，成为广州市信息服务论坛的主办单位和广东省现代信息服务业协会的副会长单位，在同行业中起着“领头羊”的作用。</p>
			</div>
			<div className="display-ib flex-cc">
				<img src="/images/bg.png" className="s005" />
			</div>
			<p className="font14 flex-cc display-ib l-ht40 color-6 s006">
				展望未来，金税在立足行业基础上，深挖应用，进一步加大技术投入和人才引进。把金税打造成以自有知识产权产品为核心的技术驱动和以 IT
				运维服务为主的服务驱动型的高新技术企业，并立志成为立足广东，面向华南，辐射全国的一流信息系统集成商。
			</p>
		</div>
		<style jsx>{`
.s001 { padding:50px 35px }
.s002 { margin-top: 20px }
.s003 { width: 60px;height: 2px;background-color: #dddddd; }
.s004 { text-indent: 2em; }
.s005 { height: 100%;width: 100% }
.s006 { text-indent: 2em; }
`}</style>
	</>;
}

/**
 * 组织架构
 */
function C007() {
	return <>
		<div className="s001">
			<div className="font30 flex-cc display-ib color-3">
				<span>
					组织架构图
				</span>
			</div>
			<div className="flex-cc  s002">
				<div className="s003">
				</div>
			</div>
			<div>
				架构图控件
			</div>

			<div className=" pos-r pos-t0 pos-r0 pos-b0 pos-l0 overflow-a ht100 w100 font12 display- s004">
				<div className="s005">
					<div className="bg-f overflow-h  s006">
						<div className="font14 ht40 l-ht40 border-b-1 s007">
							政教事业部
						</div>
						<div className="s008">
							<div className="s009">
								<img src="/images/bg.png" className="s010" />
								<div>
									<div className="s011">
										张军</div>
									<div className="s012">
										部门经理</div>
								</div>
							</div>
							<div className="p10">
								<div className="s013">
									<span className="font12 s014">部门详情</span>
								</div>
								<div>
									<span className="info s015">研究制定人事制度改革制度、方案、拟定人事管理政策法规，建立科学化、法制化的人事管理制度并进行监督检查；</span>
								</div>
							</div>
							<div className="p10">
								<div className="s016">
									<span className="font12 s017">部门详情</span>
								</div>
								<div>
									<span className="info s018">研究制定人事制度改革制度、方案、拟定人事管理政策法规，建立科学化、法制化的人事管理制度并进行监督检查；</span>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>

		</div>

		<style jsx>{`
.s001 { padding:50px 35px;background-color:#f8f8f8  }
.s002 { margin-top: 20px; }
.s003 { width: 60px;height: 2px;background-color: #dddddd; }
.s004 { z-index:120; }
.s005 { width:309px;padding-top:100px;padding-bottom:50px;margin:0 auto; }
.s006 { border-radius:4px }
.s007 { padding:0 10px;border-top-left-radius: 4px;border-top-right-radius: 4px }
.s008 { padding:20px 10px }
.s009 { display:flex; }
.s010 { height:100px;width:100px;border-radius: 50%; }
.s011 { width: 87px;height: 50px;display: flex;justify-content: center;align-items: center; }
.s012 { width: 104px;height: 50px;display: flex;justify-content: center;align-items: center; }
.s013 { padding:20px 0 }
.s014 { font-weight:bold }
.s015 { white-space: normal; }
.s016 { padding-bottom: 20px }
.s017 { font-weight:bold }
.s018 { white-space: normal; }
`}</style>
	</>;
}

/**
 * 业务构成
 */
function C008() {
	return <>
		<div className="bg-f">
			<div className="font30 flex-cc display-ib color-3 s001">
				<span>
					业务构成
				</span>
			</div>
			<div className="flex-cc s002">
				<div className="s003">
				</div>
			</div>
			<div className=" border-b-1 flex-js s004">
				<div className="display-ib">
					<div className="s005">
						<img src="/images/bg.png" className="s006" />
					</div>
				</div>
				<span className="color-6 l-ht30 s007">
					金税信息系统集成有限公司主要从事电子计算机软、硬件的开发及网络信息系统集成工程的设计，安装、维修技术服务批发和零售贸易(国家专营专控商品除外)这里结交趣味相投的新朋友用厘米秀开启年轻人专属的个性化聊天模式:畅游在动漫、文学、手游的娱乐海洋里:体验QQ钱包带来话费充值、网购转账收款的全新移动支付。
				</span>
			</div>
			<div className="flex-js s008">
				<div className="display-ib">
					<div className="s009">
						<img src="/images/bg.png" className="s010" />
					</div>
				</div>
				<span className="color-6 l-ht30 s011">
					公司的主要业务方向是为电信金融税务教育政府交通公安旅业及大中型企业提供信息管理总体解决方家其中放年设计开发与维护I运难外包业务。it运罐技术培川系统集成工程等业务在公司的总体业务中国于主导地位，占到公司业务的70%以上，
				</span>
			</div>
		</div>

		<style jsx>{`
.s001 { padding-top: 50px; }
.s002 { margin-top: 20px }
.s003 { width: 60px;height: 2px;background-color: #dddddd; }
.s004 { padding: 30px 80px }
.s005 {  width:90px ;height:90px }
.s006 { height: 90px;max-width: 100% }
.s007 { margin-left:70px;text-indent: 2em; }
.s008 { padding: 30px 80px }
.s009 {  width:90px ;height:90px }
.s010 { height: 90px;max-width: 100% }
.s011 { margin-left:70px;text-indent: 2em; }
`}</style>
	</>;
}

/**
 * 客户群体
 */
function C009() {
	return <>
		<div className="s001">
			<div className="font30 flex-cc display-ib color-3">
				<span>
					客户群体
				</span>
			</div>
			<div className="flex-cc  s002">
				<div className="s003">
				</div>
			</div>
			<div className="flex-cc s004">
				<button className="btn display-ib s005">合作伙伴</button>
				<button className="btn display-ib  s006">行业客户</button>
			</div>

			<div className="flex-js-c s007">
				<div className="display-ib s008">
					<img src="/images/bg.png" className="s009" />
				</div>
				<div className="display-ib s010">
					<img src="/images/bg.png" className="s011" />
				</div>
				<div className="display-ib s012">
					<img src="/images/bg.png" className="s013" />
				</div>
				<div className="display-ib s014">
					<img src="/images/bg.png" className="s015" />
				</div>
				<div className="display-ib s016">
					<img src="/images/bg.png" className="s017" />
				</div>
			</div>
		</div>

		<style jsx>{`
.s001 { padding:50px 35px;background-color: #f8f8f8; }
.s002 { margin-top: 20px }
.s003 { width: 60px;height: 2px;background-color: #dddddd; }
.s004 { margin-top: 20px }
.s005 { margin-right: 40px;width: 120px;height: 40px; }
.s006 { margin-left: 40px;width: 120px;height: 40px;background-color: #ffffff;color:#333333 }
.s007 { margin: 40PX }
.s008 { width:180px;height:90px }
.s009 { max-width:180px;height:90px }
.s010 { width:180px;height:90px }
.s011 { max-width:180px;height:90px }
.s012 { width:180px;height:90px }
.s013 { max-width:180px;height:90px }
.s014 { width:180px;height:90px }
.s015 { max-width:180px;height:90px }
.s016 { width:180px;height:90px }
.s017 { max-width:180px;height:90px }
`}</style>
	</>;
}

/**
 * 发展史
 */
function C010() {
	return <>
		<div className="bg-f s001">
			<div className="font30 flex-cc display-ib color-3 s002">
				<span>
					发展史
				</span>
			</div>
			<div className="flex-cc  s003">
				<div className="s004">
				</div>
			</div>
			<div>
				控件
			</div>
		</div>

		<style jsx>{`
.s001 { padding:50px 35px }
.s002 {  padding-top: 20px; }
.s003 { margin-top: 20px;margin-bottom: 50px }
.s004 { width: 60px;height: 2px;background-color: #dddddd; }
`}</style>
	</>;
}

/**
 * 荣誉资质
 */
function C011() {
	return <>
		<div className="s001">
			<div className="font30 flex-cc display-ib color-3">
				<span>
					荣誉资质
				</span>
			</div>
			<div className="flex-cc  s002">
				<div className="s003">
				</div>
			</div>
			<div className="flex-cc s004">
				<button className="btn display-ib s005">荣誉证书</button>
				<button className="btn display-ib  s006">资质证书</button>
			</div>

			<div className="pos-r">
				<div className=" flex-js-c s007">
					<div className="display-ib s008">
						<img src="/images/bg.png" className="s009" />
					</div>
					<div className="display-ib s010">
						<img src="/images/bg.png" className="s011" />
					</div>
					<div className="display-ib s012">
						<img src="/images/bg.png" className="s013" />
					</div>
				</div>
				<div className="flex-js-c s014">
					<div className="display-ib s015">
						<img src="/images/bg.png" className="s016" />
					</div>
					<div className="display-ib s017">
						<img src="/images/bg.png" className="s018" />
					</div>
					<div className="display-ib s019">
						<img src="/images/bg.png" className="s020" />
					</div>
				</div>
				<i className="iconfont icon-you cursor-p pos-a color-6 s021"></i>
				<i className="iconfont icon-zuojiantou cursor-p pos-a color-6 s022"></i>
			</div>

		</div>

		<style jsx>{`
.s001 { padding:50px 35px;background-color:#f8f8f8  }
.s002 { margin-top: 20px }
.s003 { width: 60px;height: 2px;background-color: #dddddd; }
.s004 { margin-top: 20px }
.s005 { margin-right: 40px;width: 120px;height: 40px; }
.s006 {  margin-left: 40px;background-color: #ffffff;width: 120px;height: 40px; color: #6b6b6b }
.s007 { margin: 20px 100px }
.s008 { width:300px;height:180px }
.s009 { max-width:100%;height:180px }
.s010 { width:300px;height:180px }
.s011 { max-width:100%;height:180px }
.s012 { width:300px;height:180px }
.s013 { max-width:100%;height:180px }
.s014 { margin: 20px 100px }
.s015 { width:300px;height:180px }
.s016 { max-width:100%;height:180px }
.s017 { width:300px;height:180px }
.s018 { max-width:100%;height:180px }
.s019 { width:300px;height:180px }
.s020 { max-width:100%;height:180px }
.s021 {  font-size:65px;right: 0;top: 160px }
.s022 {  font-size:50px;left: 0;top: 160px }
`}</style>
	</>;
}

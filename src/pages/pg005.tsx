import { GetStaticProps, NextPage, PageConfig } from 'next';
import Head from 'next/head';
import { ReactNode, useEffect, useState } from 'react';
import Header from '../components/c003';

interface IProps {
}

/**
 * 企业文化
 */
const page: NextPage<IProps> = () => {
	return (
		<>
			<Head>
				<title>企业文化</title>
			</Head>
			<C001>
				<C002></C002>
				<C003></C003>
				<C004></C004>
			</C001>
			<Header />
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
 * 初始化页面
 */
function C001({ children }: { children: ReactNode; }) {
	return <>
		<div className="margin-0a w1200 s001">
			{children}
		</div>
		<style jsx>{`
.s001 { margin-top:20px }
`}</style>
	</>;
}

/**
 * 面包屑
 */
function C002() {
	return <>

		<div className="ht50 bg-f flex-c font14 color-3 s001">
			<i className="iconfont icon-yewu color-3 font20 s002"></i>
			<span className="s003">企业文化</span>
			<span className="cursor-p s004">企业文化</span>
			<span className="cursor-p s005">企业文化动态</span>
		</div>

		<style jsx>{`
.s001 { padding:0 20px;margin-bottom: 20px }
.s002 { margin-right:10px }
.s003 { font-weight: bolder }
.s004 { color:#b0a7a7;margin-left:65px }
.s005 { margin-left:55px; }
`}</style>
	</>;
}

/**
 * 企业文化展示
 */
function C003() {
	return <>
		<div className="display0-">

			<div className="bg-f display">

				<div>
					<img src="/images/bg.png" className="s001" />
				</div>


				<div className="p20 color-3 s002">
					<div className="bg-theme l-ht50 s003">
						<div className="text-c color-f">
							<span>愿望</span>
						</div>
						<div className="text-c color-f">
							<i className="iconfont icon-fabu s004"></i>
						</div>
						<div className=" l-ht20 color-f s005">
							<span>“愿景” 是一种由组织领导者与组织成员形成,具有引导和激发组织成员的未来情景的一项描绘</span>
						</div>
					</div>
					<div className="bg-theme l-ht50 s006">
						<div className="text-c color-f">
							<span>愿望</span>
						</div>
						<div className="text-c color-f">
							<i className="iconfont icon-fabu s007"></i>
						</div>
						<div className=" l-ht20 color-f s008">
							<span>“愿景” 是一种由组织领导者与组织成员形成,具有引导和激发组织成员的未来情景的一项描绘</span>
						</div>
					</div>
					<div className="bg-theme l-ht50 s009">
						<div className="text-c color-f">
							<span>愿望</span>
						</div>
						<div className="text-c color-f">
							<i className="iconfont icon-fabu s010"></i>
						</div>
						<div className=" l-ht20 color-f s011">
							<span>“愿景” 是一种由组织领导者与组织成员形成,具有引导和激发组织成员的未来情景的一项描绘</span>
						</div>
					</div>
					<div className="bg-theme l-ht50 s012">
						<div className="text-c color-f">
							<span>愿望</span>
						</div>
						<div className="text-c color-f">
							<i className="iconfont icon-fabu s013"></i>
						</div>
						<div className=" l-ht20 color-f s014">
							<span>“愿景” 是一种由组织领导者与组织成员形成,具有引导和激发组织成员的未来情景的一项描绘</span>
						</div>
					</div>
				</div>


				<div className="none display-n">
					<div>
						<img src="/images/wsj.png" />
					</div>
					<div className="color-6">
						暂无数据
					</div>
				</div>

			</div>

		</div>
		<style jsx>{`
.s001 { width:1200px;height: 360px; }
.s002 { font-size:14px; display: flex;justify-content:space-evenly; }
.s003 { height:270px;width:206px; }
.s004 { font-size:55px; }
.s005 { width: 145px; margin: 0 auto;margin-top:10px }
.s006 { height:270px;width:206px; }
.s007 { font-size:55px; }
.s008 { width: 145px; margin: 0 auto;margin-top:10px }
.s009 { height:270px;width:206px; }
.s010 { font-size:55px; }
.s011 { width: 145px; margin: 0 auto;margin-top:10px }
.s012 { height:270px;width:206px; }
.s013 { font-size:55px; }
.s014 { width: 145px; margin: 0 auto;margin-top:10px }
`}</style>
	</>;
}

/**
 * 企业文化动态列表展示
 */
function C004() {
	return <>
		<div className="display-n">
			<div className="flex-c bg-f ht40 l-ht40 color-3 s001">
				<div>
					<span>标题：</span>
					<input className="text" />
				</div>
				<div>
					<span className="s002">类型：
						<select className="select">
							<option>请选择</option>
						</select>
					</span>
				</div>
				<div title="搜索" className="radius-5 ht30 l-ht30 text-c cursor-p bg-theme display-ib s003">
					<i className="iconfont icon-sousuo color-f font18"></i>
				</div>
			</div>

			<div className="bg-f p20">
				<div className="border-b-1 p10 s004">
				</div>
				<div className="border-b-1 p10 s005">
					<div className="s006">
						<img src="/images/bg.png" className="s007" />
					</div>
					<div>
						<div className="border-b-1 s008">
							<span className="s009">热烈庆祝我们公司成立二十周年热烈庆祝我们公司成立</span>
						</div>
						<div className="color-3 s010">
							<span>中央和国家机关在党和国家治理体系中处于特殊重要位置，是推动党中央治国理政、管党治党决策部署贯彻落实的领导机关。中央和国家机关党的建设关系党中央权威和集中统一领导，关系党中央决策部署的贯彻落实，关系最广大人民根本利中央和国家机关在党和国家治理体系中处于特殊重要位置，是推动党中央治国理政、管党治党决策部署贯彻落实的领导机关。中央和国家机关党的建设关系党中央权威和集中统一领导，关系党中央决策部署的贯彻落实，关系最广大人民根本利</span>
						</div>
						<div className="color-3 s011">
							<span> 2019-4-22 &nbsp; 10:00
							</span>
						</div>
					</div>
				</div>
				<div className="border-b-1 p10 s012">
					<div className="s013">
						<img src="/images/bg.png" className="s014" />
					</div>
					<div>
						<div className="border-b-1 s015">
							<span className="s016">热烈庆祝我们公司成立二十周年热烈庆祝我们公司成立</span>
						</div>
						<div className="color-3 s017">
							<span>中央和国家机关在党和国家治理体系中处于特殊重要位置，是推动党中央治国理政、管党治党决策部署贯彻落实的领导机关。中央和国家机关党的建设关系党中央权威和集中统一领导，关系党中央决策部署的贯彻落实，关系最广大人民根本利中央和国家机关在党和国家治理体系中处于特殊重要位置，是推动党中央治国理政、管党治党决策部署贯彻落实的领导机关。中央和国家机关党的建设关系党中央权威和集中统一领导，关系党中央决策部署的贯彻落实，关系最广大人民根本利</span>
						</div>
						<div className="color-3 s018">
							<span> 2019-4-22 &nbsp; 10:00
							</span>
						</div>
					</div>
				</div>
				<div className="border-b-1 p10 s019">
					<div className="s020">
						<img src="/images/bg.png" className="s021" />
					</div>
					<div>
						<div className="border-b-1 s022">
							<span className="s023">热烈庆祝我们公司成立二十周年热烈庆祝我们公司成立</span>
						</div>
						<div className="color-3 s024">
							<span>中央和国家机关在党和国家治理体系中处于特殊重要位置，是推动党中央治国理政、管党治党决策部署贯彻落实的领导机关。中央和国家机关党的建设关系党中央权威和集中统一领导，关系党中央决策部署的贯彻落实，关系最广大人民根本利中央和国家机关在党和国家治理体系中处于特殊重要位置，是推动党中央治国理政、管党治党决策部署贯彻落实的领导机关。中央和国家机关党的建设关系党中央权威和集中统一领导，关系党中央决策部署的贯彻落实，关系最广大人民根本利</span>
						</div>
						<div className="color-3 s025">
							<span> 2019-4-22 &nbsp; 10:00
							</span>
						</div>
					</div>
				</div>

				<div className="page">
					分页
				</div>

			</div>

		</div>
		<style jsx>{`
.s001 { font-size:14px;margin-bottom:20px;padding: 0 20px }
.s002 { margin-left:16px; }
.s003 { width:30px;margin-left:16px; }
.s004 { display:flex; height:185px;  }
.s005 { display:flex; height:185px; margin-top: 10px; }
.s006 { margin-right:25px; }
.s007 { width:300px;height:160px; }
.s008 { height:36px; }
.s009 { font-weight:border; }
.s010 { margin-top:16px;font-size: 14px; }
.s011 { display:flex;justify-content: flex-end;font-size: 14px; }
.s012 { display:flex; height:185px; margin-top: 10px; }
.s013 { margin-right:25px; }
.s014 { width:300px;height:160px; }
.s015 { height:36px; }
.s016 { font-weight:border; }
.s017 { margin-top:16px;font-size: 14px; }
.s018 { display:flex;justify-content: flex-end;font-size: 14px; }
.s019 { display:flex; height:185px; margin-top: 10px; }
.s020 { margin-right:25px; }
.s021 { width:300px;height:160px; }
.s022 { height:36px; }
.s023 { font-weight:border; }
.s024 { margin-top:16px;font-size: 14px; }
.s025 { display:flex;justify-content: flex-end;font-size: 14px; }
`}</style>
	</>;
}

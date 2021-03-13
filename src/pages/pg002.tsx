import { GetStaticProps, NextPage, PageConfig } from 'next';
import anylogger from 'anylogger';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Swiper as Core, EffectCoverflow, Keyboard } from 'swiper';
import SwiperCore, { Autoplay, EffectCoverflow, Keyboard } from 'swiper/core';
import Header from '../components/c003';
import 'swiper/swiper.min.css';

const logger = anylogger('pages/pg002');

interface IProps {
}

/**
 * 总经理信箱
 */
function C001() {
	const [open, setopen] = useState(true);
	const cls = `pos-f text-c color-6 s001 ${open ? '' : 'display-n'}`;
	return <>
		<div title="总经理信箱" data-id="zjlxx" className={cls}>
			<div className="pos-r">
				<a href="./message.html" target="_blank">
					<i className="iconfont icon-fabu cursor-p s002"></i>
				</a>
				<i title="关闭" onClick={() => {
					setopen(false);
				}} className="iconfont icon-ai54 cursor-p pos-a close s003"></i>
			</div>
			<a href="./message.html" target="_blank">
				<div className="cursor-p">
					总经理信箱
		</div>
			</a>
		</div>

		<style jsx>{`
.s001 { right: 270px;top: 100px;z-index: 90; }
.s002 { font-size: 40px; }
.s003 { font-size: 20px;right: 0; top: 0 }
`}</style>
	</>;
}

/**
 * 主体
 */
function C002() {
	return <>
		<div className="margin-0a w1200">
			<C003 />
			<C004 />
		</div>
	</>;
}

/**
 * 内容1
 */
function C003() {
	return <>
		<C005 />
		<C006 />
		<C007 />
		<C008 />
		<C009 />
		<C010 />
		<C011 />
		<C012 />
	</>;
}

/**
 * 内容2
 */
function C004() {
	return <>
		<div className="bg-f">
			<C013 />
			<div className="flex-js-c">
				<C014 />
				<C015 />
			</div>
		</div>
	</>;
}

/**
 * 轮播图
 */
function C005() {
	SwiperCore.use([Autoplay, Keyboard, EffectCoverflow]);

	return <>
		<Swiper
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
	</>;
}

/**
 * 通知公告
 */
function C006() {
	return <>
		<div>
			<div className="ht50 l-ht50 flex-js-c border-b-1 s001">
				<span className="font18 s002">通知公告</span>
				<a href="./anno-list.html" target="_blank"><span className="font14 color-6 cursor-p">更多<i className="iconfont icon-you color-6 font14"></i></span></a>
			</div>
			<div data-feidao-presentation="P02" className="s003">
			</div>
		</div>

		<style jsx>{`
.s001 { padding: 0 20px }
.s002 { color: #fc5c38;font-weight: 600;border-bottom:3px solid #fc5c38;height: 46px }
.s003 { padding: 10px 20px }
`}</style>
	</>;
}

/**
 * 成长路上
 */
function C007() {
	return <>
		<div className="flex-js-c">
			<div className="s001">
				<C016 />
			</div>
			<div className="s002">
				<C017 />
			</div>
		</div>
		<style jsx>{`
.s001 { width: 552px ;height:300px;margin-top: -120px;margin-left: 20px; }
.s002 { width: 615px;height: 400px }
`}</style>
	</>;
}

/**
 * 文化动态
 */
function C008() {
	return <>
		<div>
			<div className="ht50 l-ht50 flex-js-c border-b-1 s001">
				<span className="font18 s002">文化动态</span>
				<span className="font14 color-6 cursor-p">更多<i className="iconfont icon-you color-6 font14"></i></span>
			</div>
			<div className="flex-c border-b-1 s003">
				<div className="text-c s004">
					<div className="font20 s005">
						20
						</div>
					<div className="font14">
						2019/04
						</div>
				</div>
				<div className="s006">
					<img src="/images/img2.png" className="s007" />
				</div>
				<div>
					<div className="border-b-1 font16 overflow-h s008">
						热烈庆祝我们公司成立二十周年我们公司..
						</div>
					<div className="color-6 font14 overflow-h s009">
						中央和国家机关在党和国家治理体系中处于特殊重要位置，是推动党中央治国理政是推动党中央治国
						体系中处于特殊重要位置,中央和国家机关在党和国家治理体系中处于特殊重要位置，是推动党中央
						治国理政是推动党中央治国体系中处于特殊重要位置，是推动党中央治国理政是推动党中央治国体系
						中处于特殊重要位置，是推动党中央治国理政是推动党中央治国体系中处于特殊重要位置..
						</div>
				</div>
			</div>
			<div className="flex-c border-b-1 s010">
				<div className="text-c s011">
					<div className="font20 s012">
						20
						</div>
					<div className="font14">
						2019/04
						</div>
				</div>
				<div className="s013">
					<img src="/images/img2.png" className="s014" />
				</div>
				<div>
					<div className="border-b-1 font16 overflow-h s015">
						热烈庆祝我们公司成立二十周年我们公司..
						</div>
					<div className="color-6 font14 overflow-h s016">
						中央和国家机关在党和国家治理体系中处于特殊重要位置，是推动党中央治国理政是推动党中央治国
						体系中处于特殊重要位置,中央和国家机关在党和国家治理体系中处于特殊重要位置，是推动党中央
						治国理政是推动党中央治国体系中处于特殊重要位置，是推动党中央治国理政是推动党中央治国体系
						中处于特殊重要位置，是推动党中央治国理政是推动党中央治国体系中处于特殊重要位置..
						</div>
				</div>
			</div>
			<div className="flex-c s017">
				<div className="text-c color-f s018">
					<div className="font20 s019">
						20
						</div>
					<div className="font14">
						2019/04
						</div>
				</div>
				<div className="s020">
					<img src="/images/img2.png" className="s021" />
				</div>
				<div>
					<div className="border-b-1 font16 overflow-h s022">
						热烈庆祝我们公司成立二十周年我们公司..
						</div>
					<div className="color-6 font14 overflow-h s023">
						中央和国家机关在党和国家治理体系中处于特殊重要位置，是推动党中央治国理政是推动党中央治国
						体系中处于特殊重要位置,中央和国家机关在党和国家治理体系中处于特殊重要位置，是推动党中央
						治国理政是推动党中央治国体系中处于特殊重要位置，是推动党中央治国理政是推动党中央治国体系
						中处于特殊重要位置，是推动党中央治国理政是推动党中央治国体系中处于特殊重要位置..
						</div>
				</div>
			</div>
		</div>
		<style jsx>{`
.s001 { padding: 0 20px }
.s002 { color: #5573d2;font-weight: 600;border-bottom:3px solid #5573d2;height: 46px }
.s003 { padding: 30px }
.s004 { width:85px;height:85px;border: 1px solid #5573d2;color:#5573d2;line-height: 43px;margin-right: 40px }
.s005 { font-weight: bold }
.s006 { width: 300px;height: 200px;margin-right: 30px }
.s007 { max-width: 100%;height:200px }
.s008 { height:50px;line-height:50px;font-weight: bold;width: 300px; }
.s009 { width:670px;height:90px;white-space: normal; }
.s010 { padding: 30px }
.s011 { width:85px;height:85px;border: 1px solid #5573d2;color:#5573d2;line-height: 43px;margin-right: 40px }
.s012 { font-weight: bold }
.s013 { width: 300px;height: 200px;margin-right: 30px }
.s014 { max-width: 100%;height:200px }
.s015 { height:50px;line-height:50px;font-weight: bold;width: 300px; }
.s016 { width:670px;height:90px;white-space: normal; }
.s017 { padding: 30px }
.s018 { width:85px;height:85px;line-height: 43px;margin-right: 40px;background: #5573d2 }
.s019 { font-weight: bold }
.s020 { width: 300px;height: 200px;margin-right: 30px }
.s021 { max-width: 100%;height:200px }
.s022 { height:50px;line-height:50px;font-weight: bold;width: 300px; }
.s023 { width:670px;height:90px;white-space: normal; }
`}</style>
	</>;
}

/**
 * 闪耀团队
 */
function C009() {
	return <>
		<div className="flex-js-c">
			<div className="b-box  s001">
				<div className="ht50 l-ht50 flex-js-c border-b-1">
					<span className="font18 s002">闪耀团队</span>
					<span className="font14 color-6 cursor-p">更多<i className="iconfont icon-you color-6 font14"></i></span>
				</div>
				<div className="flex-js-c border-b-1 s003">
					<div className="s004">
						<div className="text-l font16 color-3 l-ht25 s005">方案部</div>
						<div className="color-6 font14  s006">
							方案部下周举行部门活动，方案部下周举行部门活动，方
							方案部下周举行部门活动...
							</div>
						<div className="flex-js-c b-box l-ht25 s007">
							<div className="color-9 font12 cursor-p"><i className="iconfont icon-yanjing1 font14"></i><span className="s008">50次浏览</span>
							</div>
							<div className="color-9 font12 cursor-p"><i className="iconfont icon-xinxi font14"></i><span className="s009">20条评论</span>
							</div>
							<div className="color-theme font12 cursor-p"><i className="iconfont icon-dianzan1 font14"></i><span className="s010">32个赞</span>
							</div>

						</div>
					</div>
					<div className="s011">
						<img src="/images/img2.png" className="s012" />
					</div>
				</div>
				<div className="flex-js-c border-b-1 s013">
					<div className="s014">
						<div className="text-l font16 color-3 l-ht25 s015">方案部</div>
						<div className="color-6 font14 overflow-h s016">
							方案部下周举行部门活动，方案部下周举行部门活动，方
							案部下周举行部门活动，方案部下周举行部门活动...
							</div>
						<div className="flex-js-c b-box l-ht25 s017">
							<div className="color-9 font12 cursor-p"><i className="iconfont icon-yanjing1 font14"></i><span className="s018">50次浏览</span>
							</div>
							<div className="color-9 font12 cursor-p"><i className="iconfont icon-xinxi font14"></i><span className="s019">20条评论</span>
							</div>
							<div className="color-theme font12 cursor-p"><i className="iconfont icon-dianzan1 font14"></i><span className="s020">32个赞</span>
							</div>

						</div>
					</div>
					<div className="s021">
						<img src="/images/img2.png" className="s022" />
					</div>
				</div>
				<div className="flex-js-c s023">
					<div className="s024">
						<div className="text-l font16 color-3 l-ht25 s025">方案部</div>
						<div className="color-6 font14 overflow-h s026">
							方案部下周举行部门活动，方案部下周举行部门活动，方
							案部下周举行部门活动，方案部下周举行部门活动...
							</div>
						<div className="flex-js-c b-box l-ht25 s027">
							<div className="color-9 font12 cursor-p"><i className="iconfont icon-yanjing1 font14"></i><span className="s028">50次浏览</span>
							</div>
							<div className="color-9 font12 cursor-p"><i className="iconfont icon-xinxi font14"></i><span className="s029">20条评论</span>
							</div>
							<div className="color-theme font12 cursor-p"><i className="iconfont icon-dianzan1 font14"></i><span className="s030">32个赞</span>
							</div>

						</div>
					</div>
					<div className="s031">
						<img src="/images/img2.png" className="s032" />
					</div>
				</div>

			</div>
			<div>
				<div className="bg-themef flex-r-cc s033">
					<div className="font36 text-c l-ht60">金点子</div>
					<div className="cursor-p l-ht30">进入 <span className="font18 l-ht25 s034">→</span>
					</div>
				</div>
				<div className="color-f flex-r-cc s035">
					<div className="font36 text-c l-ht60">i分享</div>
					<div className="cursor-p l-ht30">进入 <span className="font18 l-ht25 s036">→</span>
					</div>
				</div>
				<div className="bg-themef flex-r-cc s037">
					<div className="font36 text-c l-ht60">求助专区</div>
					<div className="cursor-p l-ht30">进入 <span className="font18 l-ht25 s038">→</span>
					</div>
				</div>
			</div>
		</div>
		<style jsx>{`
.s001 { padding-left:20px ;width: 600px ;height: 506px }
.s002 { color: #5573d2;font-weight: 600;border-bottom:3px solid #5573d2;height: 46px }
.s003 { height: 100px }
.s004 { padding-right: 20px }
.s005 { 
						font-weight: normal;padding-bottom: 5px }
.s006 { padding-bottom: 5px ;height: 40px;width: 384px }
.s007 { padding-right: 50px }
.s008 { padding-left: 10px }
.s009 { padding-left: 10px }
.s010 { padding-left: 10px }
.s011 { width: 150px;height: 100px }
.s012 { max-width: 100%;height:100px }
.s013 { height: 100px }
.s014 { padding-right: 20px }
.s015 { 
						font-weight: normal;padding-bottom: 5px }
.s016 { padding-bottom: 5px;height: 40px;width: 384px;white-space: normal }
.s017 { padding-right: 50px }
.s018 { padding-left: 10px }
.s019 { padding-left: 10px }
.s020 { padding-left: 10px }
.s021 { width: 150px;height: 100px }
.s022 { max-width: 100%;height:100px }
.s023 { height: 100px }
.s024 { padding-right: 20px }
.s025 { 
						font-weight: normal;padding-bottom: 5px }
.s026 { padding-bottom: 5px;height: 42px;width: 384px;white-space: normal }
.s027 { padding-right: 50px }
.s028 { padding-left: 10px }
.s029 { padding-left: 10px }
.s030 { padding-left: 10px }
.s031 { width: 150px;height: 100px }
.s032 { max-width: 100%;height:100px }
.s033 { width:600px;height:170px }
.s034 { padding-left: 10px }
.s035 { width:600px;height:170px;background: #55d2ca; }
.s036 { padding-left: 10px }
.s037 { width:600px;height:170px }
.s038 { padding-left: 10px }
`}</style>
	</>;
}

/**
 * 我的show场
 */
function C010() {
	return <>
		<div>
			<div className="ht50 l-ht50 flex-js-c border-b-1 s001">
				<span className="font18 s002">我的show场</span>
				<span className="font14 color-6 cursor-p">更多<i className="iconfont icon-you color-6 font14"></i></span>
			</div>
			<div className="flex-c border-b-1 s003">
				<div className="s004">
					<img src="/images/img2.png" className="s005" />
				</div>
				<div>
					<div className="border-b-1 font16 overflow-h s006">
						<span className="overflow-h s007">
							热烈庆祝我们公司成立二十周年我们公司..
							</span>
					</div>
					<div className="color-6 font14 overflow-h b-box s008">
						中央和国家机关在党和国家治理体系中处于特殊重要位置，是推动党中央治国理政是推动党中央治国
						体系中处于特殊重要位置,中央和国家机关在党和国家治理体系中处于特殊重要位置，是推动党中央
						治国理政是推动党中央治国体系中处于特殊重要位置，是推动党中央治国理政是推动党中央治国体系
						中处于特殊重要位置，是推动党中央治国理政是推动党中央治国体系中处于特殊重要位置..
						</div>
					<div className="flex-fe-c b-box l-ht50 ">
						<div className="color-9 font12 cursor-p text-r s009"><i className="iconfont icon-yanjing1 font14"></i><span className="s010">50次浏览</span>
						</div>
						<div className="color-9 font12 cursor-p text-r s011"><i className="iconfont icon-xinxi font14"></i><span className="s012">20条评论</span>
						</div>
						<div className="color-theme font12 cursor-p text-r s013"><i className="iconfont icon-dianzan1 font14"></i><span className="s014">32个赞</span>
						</div>

					</div>
				</div>
			</div>
			<div className="flex-c border-b-1 s015">
				<div className="s016">
					<img src="/images/img2.png" className="s017" />
				</div>
				<div>
					<div className="border-b-1 font16 overflow-h s018">
						<span className="overflow-h s019">
							热烈庆祝我们公司成立二十周年我们公司..
							</span>
					</div>
					<div className="color-6 font14 overflow-h b-box s020">
						中央和国家机关在党和国家治理体系中处于特殊重要位置，是推动党中央治国理政是推动党中央治国
						体系中处于特殊重要位置,中央和国家机关在党和国家治理体系中处于特殊重要位置，是推动党中央
						治国理政是推动党中央治国体系中处于特殊重要位置，是推动党中央治国理政是推动党中央治国体系
						中处于特殊重要位置，是推动党中央治国理政是推动党中央治国体系中处于特殊重要位置..
						</div>
					<div className="flex-fe-c b-box l-ht50 ">
						<div className="color-9 font12 cursor-p text-r s021"><i className="iconfont icon-yanjing1 font14"></i><span className="s022">50次浏览</span>
						</div>
						<div className="color-9 font12 cursor-p text-r s023"><i className="iconfont icon-xinxi font14"></i><span className="s024">20条评论</span>
						</div>
						<div className="color-theme font12 cursor-p text-r s025"><i className="iconfont icon-dianzan1 font14"></i><span className="s026">32个赞</span>
						</div>

					</div>
				</div>
			</div>
			<div className="flex-c s027">
				<div className="s028">
					<img src="/images/img2.png" className="s029" />
				</div>
				<div>
					<div className="border-b-1 font16 s030">
						<span className="overflow-h s031">
							热烈庆祝我们公司成立二十周年我们公司..
							</span>
					</div>
					<div className="color-6 font14 overflow-h b-box s032">
						中央和国家机关在党和国家治理体系中处于特殊重要位置，是推动党中央治国理政是推动党中央治国
						体系中处于特殊重要位置,中央和国家机关在党和国家治理体系中处于特殊重要位置，是推动党中央
						治国理政是推动党中央治国体系中处于特殊重要位置，是推动党中央治国理政是推动党中央治国体系
						中处于特殊重要位置，是推动党中央治国理政是推动党中央治国体系中处于特殊重要位置..
						</div>
					<div className="flex-fe-c b-box l-ht50 ">
						<div className="color-9 font12 cursor-p text-r s033"><i className="iconfont icon-yanjing1 font14"></i><span className="s034">50次浏览</span>
						</div>
						<div className="color-9 font12 cursor-p text-r s035"><i className="iconfont icon-xinxi font14"></i><span className="s036">20条评论</span>
						</div>
						<div className="color-theme font12 cursor-p text-r s037"><i className="iconfont icon-dianzan1 font14"></i><span className="s038">32个赞</span>
						</div>

					</div>
				</div>
			</div>
		</div>
		<style jsx>{`
.s001 { padding: 0 20px }
.s002 { color: #5573d2;font-weight: 600;border-bottom:3px solid #5573d2;height: 46px }
.s003 { padding: 30px }
.s004 { width: 300px;height: 200px;margin-right: 30px }
.s005 { max-width: 100%;height:200px }
.s006 { height:50px;line-height:50px;font-weight: bold;width: 820px }
.s007 { width: 300px }
.s008 { width:820px;height:90px;white-space: normal;padding-top: 20px }
.s009 { width: 120px }
.s010 { padding-left: 10px }
.s011 { width: 120px }
.s012 { padding-left: 10px }
.s013 { width: 120px }
.s014 { padding-left: 10px }
.s015 { padding: 30px }
.s016 { width: 300px;height: 200px;margin-right: 30px }
.s017 { max-width: 100%;height:200px }
.s018 { height:50px;line-height:50px;font-weight: bold;width: 820px; }
.s019 { width: 300px }
.s020 { width:820px;height:90px;white-space: normal;padding-top: 20px }
.s021 { width: 120px }
.s022 { padding-left: 10px }
.s023 { width: 120px }
.s024 { padding-left: 10px }
.s025 { width: 120px }
.s026 { padding-left: 10px }
.s027 { padding: 30px }
.s028 { width: 300px;height: 200px;margin-right: 30px }
.s029 { max-width: 100%;height:200px }
.s030 { height:50px;line-height:50px;font-weight: bold;width: 820px; }
.s031 { width: 300px }
.s032 { width:820px;height:90px;white-space: normal;padding-top: 20px }
.s033 { width: 120px }
.s034 { padding-left: 10px }
.s035 { width: 120px }
.s036 { padding-left: 10px }
.s037 { width: 120px }
.s038 { padding-left: 10px }
`}</style>
	</>;
}

/**
 * 公司活动
 */
function C011() {
	return <>
		<div>
			<div className="ht50 l-ht50 flex-js-c border-b-1 s001">
				<span className="font18 s002">公司活动</span>
				<span className="font14 color-6 cursor-p">更多<i className="iconfont icon-you color-6 font14"></i></span>
			</div>
			<div className="flex-js-c s003">
				<div className="border-1 s004">
					<div className="pos-r s005">
						<img src="/images/j64.png" className="s006" />
						<div className="pos-a pos-b0 pos-r0 pos-l0 color-f l-ht30 flex-fe-c s007">
							<div className="font12 cursor-p text-l s008"><i className="iconfont icon-shalou font14"></i><span className="s009">进行中</span>
							</div>
							<div className="font12 cursor-p text-l s010"><i className="iconfont icon-renyuan font14"></i><span className="s011">20条评论</span>
							</div>
						</div>
					</div>
					<div className="flex-js-c cursor-p s012">
						<div className=" text-l hua font14 color-6">周末方案部员工聚餐哦！快来加入吧！</div>
						<div className="ht30 l-ht30 text-c color-f font14  s013">
							立即参加
							</div>
					</div>
				</div>
				<div className="border-1 s014">
					<div className="pos-r s015">
						<img src="/images/j64.png" className="s016" />
						<div className="pos-a pos-b0 pos-r0 pos-l0 color-f l-ht30 flex-fe-c s017">
							<div className="font12 cursor-p text-l s018"><i className="iconfont icon-shalou font14"></i><span className="s019">进行中</span>
							</div>
							<div className="font12 cursor-p text-l s020"><i className="iconfont icon-renyuan font14"></i><span className="s021">20条评论</span>
							</div>
						</div>
					</div>
					<div className="flex-js-c cursor-p s022">
						<div className=" text-l hua font14 color-6">周末方案部员工聚餐哦！快来加入吧！</div>
						<div className="ht30 l-ht30 text-c color-f font14  s023">
							立即参加
							</div>
					</div>
				</div>
			</div>
		</div>
		<style jsx>{`
.s001 { padding: 0 20px }
.s002 { color: #5573d2;font-weight: 600;border-bottom:3px solid #5573d2;height: 46px }
.s003 { padding: 30px 50px; }
.s004 { width: 520px ;height: 250px }
.s005 { height: 180px;width:520px }
.s006 { max-width: 100%;height:180px }
.s007 { background: rgba(0,0,0,0) }
.s008 { width: 110px }
.s009 { padding-left: 10px }
.s010 { width: 110px }
.s011 { padding-left: 10px }
.s012 { height:70px;padding:0 30px }
.s013 { width: 82px;background-color: #5573d2;border-radius: 5px;font-weight: normal; }
.s014 { width: 520px ;height: 250px }
.s015 { height: 180px;width:520px }
.s016 { max-width: 100%;height:180px }
.s017 { background: rgba(0,0,0,0) }
.s018 { width: 110px }
.s019 { padding-left: 10px }
.s020 { width: 110px }
.s021 { padding-left: 10px }
.s022 { height:70px;padding:0 30px }
.s023 { width: 82px;background-color: #5573d2;border-radius: 5px;font-weight: normal; }
`}</style>
	</>;
}

/**
 * 员工活动
 */
function C012() {
	return <>
		<div>
			<div className="ht50 l-ht50 flex-js-c border-b-1 s001">
				<span className="font18 s002">员工活动</span>
				<span className="font14 color-6 cursor-p">更多<i className="iconfont icon-you color-6 font14"></i></span>
			</div>
			<div className="s003">
				<div className="flex-c border-b-1 s004">
					<div className="s005">
						<img src="/images/j42.png" className="s006" />
					</div>
					<div>
						<div className="font16 overflow-h color-3 s007">
							周末聚餐，快来一起吧
							</div>
						<div className="flex-js-c cursor-p color-6 font14 overflow-h b-box ht40 s008">
							<div className=" text-l font14 color-6">
								本周末员工聚餐，让闲暇时间过的有意义，快来加入吧！本周末员工聚餐，让闲暇时间过的有意义，快来加入吧</div>
							<div className="ht30 l-ht30 text-c color-f font14  s009">
								立即参加
								</div>
						</div>
						<div className="flex-js-c b-box l-ht40 ht40 font14">
							<div>
								<span className="color-3 ">活动地点：</span>
								<span className="color-6">郑州金水区天竺地区裕翔路88号•中国国际展览中心 </span>
							</div>
							<div>
								<span className="color-3 ">活动时间：</span>
								<span className="color-6">2019-07-04 12:50~2019-07-04 15:50</span>
							</div>
						</div>
					</div>
				</div>
				<div className="flex-c border-b-1 s010">
					<div className="s011">
						<img src="/images/j42.png" className="s012" />
					</div>
					<div>
						<div className="font16 overflow-h color-3 s013">
							周末聚餐，快来一起吧
							</div>
						<div className="flex-js-c cursor-p color-6 font14 overflow-h b-box ht40 s014">
							<div className=" text-l font14 color-6">
								本周末员工聚餐，让闲暇时间过的有意义，快来加入吧！本周末员工聚餐，让闲暇时间过的有意义，快来加入吧</div>
							<div className="ht30 l-ht30 text-c color-f font14  s015">
								立即参加
								</div>
						</div>
						<div className="flex-js-c b-box l-ht40 ht40 font14">
							<div>
								<span className="color-3 ">活动地点：</span>
								<span className="color-6">郑州金水区天竺地区裕翔路88号•中国国际展览中心 </span>
							</div>
							<div>
								<span className="color-3 ">活动时间：</span>
								<span className="color-6">2019-07-04 12:50~2019-07-04 15:50</span>
							</div>
						</div>
					</div>
				</div>
				<div className="flex-c  s016">
					<div className="s017">
						<img src="/images/j42.png" className="s018" />
					</div>
					<div>
						<div className="font16 overflow-h color-3 s019">
							周末聚餐，快来一起吧
							</div>
						<div className="flex-js-c cursor-p color-6 font14 overflow-h b-box ht40 s020">
							<div className=" text-l font14 color-6">
								本周末员工聚餐，让闲暇时间过的有意义，快来加入吧！本周末员工聚餐，让闲暇时间过的有意义，快来加入吧</div>
							<div className="ht30 l-ht30 text-c color-f font14  s021">
								立即参加
								</div>
						</div>
						<div className="flex-js-c b-box l-ht40 ht40 font14">
							<div>
								<span className="color-3 ">活动地点：</span>
								<span className="color-6">郑州金水区天竺地区裕翔路88号•中国国际展览中心 </span>
							</div>
							<div>
								<span className="color-3 ">活动时间：</span>
								<span className="color-6">2019-07-04 12:50~2019-07-04 15:50</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<style jsx>{`
.s001 { padding: 0 20px }
.s002 { color: #5573d2;font-weight: 600;border-bottom:3px solid #5573d2;height: 46px }
.s003 { padding: 0 20px }
.s004 { padding: 30px 0 }
.s005 { width: 180px;height: 120px;margin-right: 20px }
.s006 { max-width: 100%;height:120px }
.s007 { height:40px;line-height:40px;font-weight: bold;width: 920px }
.s008 { width:920px;white-space: normal ;padding-right: 30px }
.s009 { width: 82px;background-color: #5573d2;border-radius: 5px;font-weight: normal; }
.s010 { padding: 30px 0 }
.s011 { width: 180px;height: 120px;margin-right: 20px }
.s012 { max-width: 100%;height:120px }
.s013 { height:40px;line-height:40px;font-weight: bold;width: 920px;white-space: normal }
.s014 { width:920px;white-space: normal ;padding-right: 30px;white-space: normal }
.s015 { width: 82px;background-color: #5573d2;border-radius: 5px;font-weight: normal; }
.s016 { padding: 30px 0 }
.s017 { width: 180px;height: 120px;margin-right: 20px }
.s018 { max-width: 100%;height:120px }
.s019 { height:40px;line-height:40px;font-weight: bold;width: 920px;white-space: normal }
.s020 { width:920px;white-space: normal ;padding-right: 30px;white-space: normal }
.s021 { width: 82px;background-color: #5573d2;border-radius: 5px;font-weight: normal; }
`}</style>
	</>;
}

/**
 * 趣味相投
 */
function C013() {
	return <>
		<div>
			<div className="ht50 l-ht50 flex-js-c border-b-1 s001">
				<span className="font18 s002">趣味相投</span>
				<span className="font14 color-6 cursor-p">更多<i className="iconfont icon-you color-6 font14"></i></span>
			</div>
			<div className="flex-js-c s003">
				<div className="border-1 s004">
					<div className="pos-r s005">
						<img src="/images/j64.png" className="s006" />
						<div className="pos-a b-box pos-b0 pos-r0 pos-l0 color-f p20 s007">
							<div className="font16 text-l l-ht40">骑行社</div>
							<div className="font14 text-l l-ht30">社团简介：</div>
							<div className="font14 text-l overflow-h s008">
								骑行社主要是为了我们公司喜欢骑行游玩的员工，成立的社团；从成立至今，策划组织了......</div>
						</div>
					</div>
					<div className="flex-js-c cursor-p s009">
						<div className="flex-r-cc cursor-p hua color-6 s010">
							<span><i className="iconfont icon-jianjie font22"></i></span>
							<span className="font14 l-ht20">社团概况</span>
						</div>
						<div className="flex-r-cc cursor-p hua color-6 s011">
							<span><i className="iconfont icon-jilu font24"></i></span>
							<span className="font14 l-ht20">活动记录</span>
						</div>
						<div className="flex-r-cc cursor-p hua color-6 s012">
							<span><i className="iconfont icon-jrtd font24"></i></span>
							<span className="font14 l-ht20">申请加入</span>
						</div>
						<div className="flex-r-cc cursor-p hua color-6 s013">
							<span><i className="iconfont icon-pingfen font26"></i></span>
							<span className=" font14 l-ht20">我要评分</span>
						</div>
					</div>
				</div>
				<div className="border-1 s014">
					<div className="pos-r s015">
						<img src="/images/j64.png" className="s016" />
						<div className="pos-a b-box pos-b0 pos-r0 pos-l0 color-f p20 s017">
							<div className="font16 text-l l-ht40">骑行社</div>
							<div className="font14 text-l l-ht30">社团简介：</div>
							<div className="font14 text-l overflow-h s018">
								骑行社主要是为了我们公司喜欢骑行游玩的员工，成立的社团；从成立至今，策划组织了......</div>
						</div>
					</div>
					<div className="flex-js-c cursor-p s019">
						<div className="flex-r-cc cursor-p hua color-6 s020">
							<span><i className="iconfont icon-jianjie font22"></i></span>
							<span className="font14 l-ht20">社团概况</span>
						</div>
						<div className="flex-r-cc cursor-p hua color-6 s021">
							<span><i className="iconfont icon-jilu font24"></i></span>
							<span className="font14 l-ht20">活动记录</span>
						</div>
						<div className="flex-r-cc cursor-p hua color-6 s022">
							<span><i className="iconfont icon-jrtd font24"></i></span>
							<span className="font14 l-ht20">申请加入</span>
						</div>
						<div className="flex-r-cc cursor-p hua color-6 s023">
							<span><i className="iconfont icon-pingfen font26"></i></span>
							<span className=" font14 l-ht20">我要评分</span>
						</div>
					</div>
				</div>
			</div>
			<div className="flex-js-c s024">
				<div className="border-1 s025">
					<div className="pos-r s026">
						<img src="/images/j64.png" className="s027" />
						<div className="pos-a b-box pos-b0 pos-r0 pos-l0 color-f p20 s028">
							<div className="font16 text-l l-ht40">骑行社</div>
							<div className="font14 text-l l-ht30">社团简介：</div>
							<div className="font14 text-l overflow-h s029">
								骑行社主要是为了我们公司喜欢骑行游玩的员工，成立的社团；从成立至今，策划组织了......</div>
						</div>
					</div>
					<div className="flex-js-c cursor-p s030">
						<div className="flex-r-cc cursor-p hua color-6 s031">
							<span><i className="iconfont icon-jianjie font22"></i></span>
							<span className=" font14 l-ht20">社团概况</span>
						</div>
						<div className="flex-r-cc cursor-p hua color-6 s032">
							<span><i className="iconfont icon-jilu font24"></i></span>
							<span className=" font14 l-ht20">活动记录</span>
						</div>
						<div className="flex-r-cc cursor-p hua color-6 s033">
							<span><i className="iconfont icon-jrtd font24"></i></span>
							<span className=" font14 l-ht20">申请加入</span>
						</div>
						<div className="flex-r-cc cursor-p hua color-6 s034">
							<span><i className="iconfont icon-pingfen font26"></i></span>
							<span className=" font14 l-ht20">我要评分</span>
						</div>
					</div>
				</div>
				<div className="border-1 s035">
					<div className="pos-r s036">
						<img src="/images/j64.png" className="s037" />
						<div className="pos-a b-box pos-b0 pos-r0 pos-l0 color-f p20 s038">
							<div className="font16 text-l l-ht40">骑行社</div>
							<div className="font14 text-l l-ht30">社团简介：</div>
							<div className="font14 text-l overflow-h s039">
								骑行社主要是为了我们公司喜欢骑行游玩的员工，成立的社团；从成立至今，策划组织了......</div>
						</div>
					</div>
					<div className="flex-js-c cursor-p s040">
						<div className="flex-r-cc cursor-p hua color-6 s041">
							<span><i className="iconfont icon-jianjie font22"></i></span>
							<span className="font14 l-ht20">社团概况</span>
						</div>
						<div className="flex-r-cc cursor-p hua color-6 s042">
							<span><i className="iconfont icon-jilu font24"></i></span>
							<span className="font14 l-ht20">活动记录</span>
						</div>
						<div className="flex-r-cc cursor-p hua color-6 s043">
							<span><i className="iconfont icon-jrtd font24"></i></span>
							<span className="font14 l-ht20">申请加入</span>
						</div>
						<div className="flex-r-cc cursor-p hua color-6 s044">
							<span><i className="iconfont icon-pingfen font26"></i></span>
							<span className="font14 l-ht20">我要评分</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<style jsx>{`
.s001 { padding: 0 20px }
.s002 { color: #5573d2;font-weight: 600;border-bottom:3px solid #5573d2;height: 46px }
.s003 { padding: 30px 50px; }
.s004 { width: 520px ;height: 250px }
.s005 { height: 180px;width:520px }
.s006 { max-width: 100%;height:180px }
.s007 { background: rgba(0,0,0,0.2);height:180px  }
.s008 { width: 480px;height:40px;white-space: normal }
.s009 { height:70px;padding:0 50px }
.s010 { width: 60px }
.s011 { width: 60px }
.s012 { width: 60px }
.s013 { width: 60px }
.s014 { width: 520px ;height: 250px }
.s015 { height: 180px;width:520px }
.s016 { max-width: 100%;height:180px }
.s017 { background: rgba(0,0,0,0.2);height:180px  }
.s018 { width: 480px;height:40px;white-space: normal }
.s019 { height:70px;padding:0 50px }
.s020 { width: 60px }
.s021 { width: 60px }
.s022 { width: 60px }
.s023 { width: 60px }
.s024 { padding: 30px 50px; }
.s025 { width: 520px ;height: 250px }
.s026 { height: 180px;width:520px }
.s027 { max-width: 100%;height:180px }
.s028 { background: rgba(0,0,0,0.2);height:180px  }
.s029 { width: 480px;height:40px;white-space: normal }
.s030 { height:70px;padding:0 50px }
.s031 { width: 60px }
.s032 { width: 60px }
.s033 { width: 60px }
.s034 { width: 60px }
.s035 { width: 520px ;height: 250px }
.s036 { height: 180px;width:520px }
.s037 { max-width: 100%;height:180px }
.s038 { background: rgba(0,0,0,0.2);height:180px  }
.s039 { width: 480px;height:40px;white-space: normal }
.s040 { height:70px;padding:0 50px }
.s041 { width: 60px }
.s042 { width: 60px }
.s043 { width: 60px }
.s044 { width: 60px }
`}</style>
	</>;
}

/**
 * 金税讲堂
 */
function C014() {
	return <>
		<div className="s001">
			<div className="ht50 l-ht50 flex-js-c border-b-1 s002">
				<span className="font18 s003">金税家园</span>
				<span className="font14 color-6 cursor-p">更多<i className="iconfont icon-you color-6 font14"></i></span>
			</div>
			<div className="s004">
				<div className="flex-js-c s005">
					<div className="flex-cc ht50 l-ht50 color-theme cursor-p s006">
						<span className="l-ht50 ht50"><i className="iconfont icon-kecheng font30"></i></span>
						<span className="text-c s007">必修课</span>
						<span className="l-ht50 ht50"><i className="iconfont icon-you font12"></i></span>
					</div>
					<div className="flex-cc ht50 l-ht50 color-f cursor-p s008">
						<span className="l-ht50 ht50"><i className="iconfont icon-shujia font24"></i></span>
						<span className="text-c s009">自习室</span>
						<span className="l-ht50 ht50"><i className="iconfont icon-you font12"></i></span>
					</div>
				</div>
				<div className="flex-js-c s010">
					<div className="s011">
						<div className="pos-r s012">
							<img src="/images/j77.png" className="s013" />
						</div>
						<div className="cursor-p ht30 l-ht30 font14 color-6 text-c hua cursor-p">
							Python语言程序设计
								</div>
					</div>
					<div className="s014">
						<div className="pos-r s015">
							<img src="/images/j77.png" className="s016" />
						</div>
						<div className="cursor-p ht30 l-ht30 font14 color-6 text-c hua cursor-p">
							Python语言程序设计
								</div>
					</div>
				</div>
				<div className="flex-js-c s017">
					<div className="s018">
						<div className="pos-r s019">
							<img src="/images/j77.png" className="s020" />
						</div>
						<div className="cursor-p ht30 l-ht30 font14 color-6 text-c hua cursor-p">
							Python语言程序设计
								</div>
					</div>
					<div className="s021">
						<div className="pos-r s022">
							<img src="/images/j77.png" className="s023" />
						</div>
						<div className="cursor-p ht30 l-ht30 font14 color-6 text-c hua cursor-p">
							Python语言程序设计
								</div>
					</div>
				</div>
			</div>
		</div>
		<style jsx>{`
.s001 { width: 600px }
.s002 { padding: 0 20px }
.s003 { color: #5573d2;font-weight: 600;border-bottom:3px solid #5573d2;height: 46px }
.s004 { height: 550px ;padding: 0 20px }
.s005 { padding: 37px 50px 30px }
.s006 { width: 200px;background-color:rgba(85, 115, 210, 0.05);
							 }
.s007 { width: 100px }
.s008 { width: 200px;background-color: #5573d2; }
.s009 { width: 100px }
.s010 { padding-bottom:16px }
.s011 { width: 270px ;height: 190px }
.s012 { height: 160px;width:270px }
.s013 { max-width: 100%;height:160px }
.s014 { width: 270px ;height: 190px }
.s015 { height: 160px;width:270px }
.s016 { max-width: 100%;height:160px }
.s017 { padding-bottom:16px }
.s018 { width: 270px ;height: 190px }
.s019 { height: 160px;width:270px }
.s020 { max-width: 100%;height:160px }
.s021 { width: 270px ;height: 190px }
.s022 { height: 160px;width:270px }
.s023 { max-width: 100%;height:160px }
`}</style>
	</>;
}

/**
 * 红黑榜
 */
function C015() {
	return <>
		<div className="s001">
			<div className="ht50 l-ht50 flex-js-c border-b-1 s002">
				<span className="font18 s003">红黑榜</span>
				<span className="font14 color-6 cursor-p">更多<i className="iconfont icon-you color-6 font14"></i></span>
			</div>
			<div className="s004">
				<div className="flex-c b-box s005">
					<div className="s006">
						<div className="l-ht40 ht40 text-c font16 color-f s007">积分总榜红榜</div>
						<div className="b-box s008">
							<div className="l-ht30 font14 color-6 text-c s009">张三</div>
							<div className="l-ht30 font14 color-6 text-c s010">张三</div>
							<div className="l-ht30 font14 color-6 text-c s011">张三</div>
						</div>
					</div>
					<div className="s012">
						<div className="l-ht40 ht40 text-c font16 color-f s013">积分总榜黑榜</div>
						<div className="b-box s014">
							<div className="l-ht30 font14 color-6 text-c s015">张三</div>
							<div className="l-ht30 font14 color-6 text-c s016">张三</div>
							<div className="l-ht30 font14 color-6 text-c s017">张三</div>
						</div>
					</div>

				</div>
				<div className="flex-c s018">
					<div className="s019">
						<div className="l-ht40 ht40 text-c font16 color-f s020">积分总榜红榜</div>
						<div className="b-box s021">
							<div className="l-ht30 font14 color-6 text-c s022">张三</div>
							<div className="l-ht30 font14 color-6 text-c s023">张三</div>
							<div className="l-ht30 font14 color-6 text-c s024">张三</div>
						</div>
					</div>
					<div className="s025">
						<div className="l-ht40 ht40 text-c font16 color-f s026">积分总榜黑榜</div>
						<div className="b-box s027">
							<div className="l-ht30 font14 color-6 text-c s028">张三</div>
							<div className="l-ht30 font14 color-6 text-c s029">张三</div>
							<div className="l-ht30 font14 color-6 text-c s030">张三</div>
						</div>
					</div>

				</div>
			</div>
		</div>
		<style jsx>{`
.s001 { width: 600px }
.s002 { padding: 0 20px }
.s003 { color: #5573d2;font-weight: 600;border-bottom:3px solid #5573d2;height: 46px }
.s004 { height: 550px;padding: 0 30px }
.s005 { padding-top: 20px }
.s006 { height: 245px;width:270px }
.s007 { font-weight: normal;background-color: #f87373; }
.s008 { height: 205px ;background-color: rgba(248, 115, 115, 0.1); padding-top: 10px }
.s009 { padding-top:6px }
.s010 { padding-top:6px }
.s011 { padding-top:6px }
.s012 { height: 245px;width:270px }
.s013 { font-weight: normal;background-color: #333333; }
.s014 { height: 205px;background-color: rgba(51, 51, 51, 0.1);padding-top:10px }
.s015 { padding-top:6px }
.s016 { padding-top:6px }
.s017 { padding-top:6px }
.s018 { margin-top: 20px }
.s019 { height: 245px;width:270px }
.s020 { font-weight: normal;background-color: #f87373; }
.s021 { height: 205px ;background-color: rgba(248, 115, 115, 0.1);padding-top: 10px }
.s022 { padding-top:6px }
.s023 { padding-top:6px }
.s024 { padding-top:6px }
.s025 { height: 245px;width:270px }
.s026 { font-weight: normal;background-color: #333333; }
.s027 { height: 205px;background-color: rgba(51, 51, 51, 0.1);padding-top: 10px }
.s028 { padding-top:6px }
.s029 { padding-top:6px }
.s030 { padding-top:6px }
`}</style>
	</>;
}

/**
 * 成长路上轮播
 */
function C016() {
	SwiperCore.use([Autoplay, Keyboard]);
	const data = [{
		f001: '/images/img1.png',
		f004: '',
		f007: '',
	}, {
		f001: '/images/img1.png',
		f004: '',
		f007: '',
	}, {
		f001: '/images/img1.png',
		f004: '',
		f007: '',
	}, {
		f001: '/images/img1.png',
		f004: '',
		f007: '',
	}];
	return <>
		<Swiper
			spaceBetween={10}
			slidesPerView={1}
			autoplay={true}
			keyboard={{
				enabled: true,
				onlyInViewport: true,
				pageUpDown: true
			}}
			effect='slide'
			speed={1500}
		>
			{data.map((tb002, idx) => {
				const url = `/pg009?growth_pro_num=${tb002.f004}`;
				return <SwiperSlide key={idx}>
					<li className="s001">
						<Link href={url}>
							<img src={tb002.f001} title={tb002.f007} className="s002" />
						</Link>
						<div className="s003">
							<span className="s004">{tb002.f007}</span>
						</div>
					</li>
				</SwiperSlide>;
			})}
		</Swiper>
		<style jsx>{`
.s001 { position:relative; width: 600px ;height:400px; }
.s002 { display:inline-block;width:100%;height:368px;margin-top:30px;max-height:100%;vertical-align: middle;height: 400px;max-width:100%; }
.s003 { text-align: center;position: absolute;bottom: 59px;
			width: 100%;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;left: auto; }
.s004 { background:rgba(222,222,220,0.3) }
`}</style>
	</>;
}

/**
 * 成长路上列表
 */
function C017() {
	const f014 = new Date().getTime();
	const data = [{
		f001: '/images/img1.png',
		f002: '',
		f004: '',
		f007: '',
		f014
	}, {
		f001: '/images/img1.png',
		f002: '',
		f004: '',
		f007: '',
		f014
	}];
	return <>
		<div className="ht50 l-ht50 flex-js-c border-b-1 s001">
			<span className="font18 s002">成长路上</span>
			<Link href="/news">
				<span className="font14 color-6 cursor-p">更多<i className="iconfont icon-you color-6 font14"></i></span>
			</Link>
		</div>
		{data.map((tb002, idx) => {
			const url = `/pg009?growth_pro_num=${tb002.f004}`;
			return <Link href={url} key={idx}>
				<div className="flex-c border-b-1 s003">
					<div className="s004">
						<img src={tb002.f001} title={tb002.f007} className="s005" />
					</div>
					<div className="s006">
						<div className="flex-c hua2">
							<div className="overflow-h cursor-p font16 l-ht25 color-3 font-b  s007">
								{tb002.f007}
							</div>
							<div className="text-r color-9 s008">{new Date(tb002.f014).toLocaleDateString()}</div>
						</div>
						<div className="font14 l-ht20 color-6 infoo s009">
							{tb002.f002}
						</div>
					</div>
				</div>
			</Link>;
		})}
		<style jsx>{`
.s001 { padding-right:20px; }
.s002 { color: #fc5c38;font-weight: 600;border-bottom:3px solid #fc5c38;height: 46px }
.s003 { height: 110px ;padding:20px 10px }
.s004 { width: 180px;height: 120px }
.s005 { height: 120px;width:100% }
.s006 { height: 120px;width: 340px;margin-top:30px;margin-left:20px; }
.s007 { flex:0.7 }
.s008 { flex:0.3 }
.s009 { line-height:25px; }
`}</style>
	</>;
}

/**
 * Home
 */
const page: NextPage<IProps> = () => {
	return (
		<>
			<Head>
				<title>主页</title>
			</Head>
			<Header />
			<C001 />
			<C002 />
		</>
	);
};

export const config: PageConfig = {
	amp: false
};

export default page;

export const getStaticProps: GetStaticProps<IProps> = async () => {
	return Promise.resolve({
		props: {
		},
		revalidate: 60 * 60 * 24 // 1 day
	});
};

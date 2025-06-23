import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Play, Music, Users, TrendingUp, CheckCircle, Star, ArrowRight, Globe, Zap, Shield, Heart, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import soundscapeLogo from './assets/Soundscape_Brand_Logo_Concept.png'
import './App.css'

function App() {
  const [isVisible, setIsVisible] = useState(false)
  const [openFAQ, setOpenFAQ] = useState(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  const faqData = [
    {
      category: "S. 簡介與入門",
      questions: [
        {
          question: "什麼是 S.？",
          answer: "S. 是一個專為亞洲音樂創作者設計的數位音樂發行與文化共創平台。我們提供領先的工具和服務，幫助獨立音樂人、樂團、製作人將作品發行至全球各大數位音樂平台，並提供透明的收益管理、深度的在地化支援，以及豐富的共創機會。"
        },
        {
          question: "S. 與其他數位發行平台有何不同？",
          answer: "S. 的核心優勢在於對亞洲創作者的深度理解與在地化服務：零年費、台幣即時付款、中文客服、共創文化與長期陪跑，以及未來將推出的 AI Preflight 自動檢測、自動 Splits 分帳、稅務請款單自動生成等專為在地創作者設計的工具。"
        },
        {
          question: "誰適合使用 S.？",
          answer: "S. 適合所有希望將音樂作品發行至全球數位平台的音樂創作者，無論您是新進型創作者（首次發行、個人製作）、成長型創作者（已有作品、開始累積聽眾）、還是專業型創作者（已具市場知名度、作品量大）。"
        },
        {
          question: "如何開始使用 S.？",
          answer: "1. 註冊帳戶：訪問 S. 官方網站並完成帳戶註冊。2. 上傳音樂：按照指引上傳音檔、封面圖片和作品資訊。3. 選擇發行平台：選擇您希望發行的數位音樂平台。4. 提交審核：提交作品進行審核。5. 作品上線：審核通過後，您的音樂將在選定的平台上線。"
        }
      ]
    },
    {
      category: "音樂上傳與發行",
      questions: [
        {
          question: "我需要準備哪些檔案才能發行音樂？",
          answer: "您需要準備：高品質的音檔（建議 WAV 或 FLAC 格式）、清晰的封面圖片（3000x3000 像素）、完整的作品資訊（歌曲名稱、藝人名稱、專輯名稱、版權資訊等），以及歌詞（如適用）。"
        },
        {
          question: "發行作品需要多長時間？",
          answer: "作品從提交到上線通常需要 1-3 週，會因平台而異。建議您至少在預計發行日期前 2-4 週提交作品，以便有充足的時間進行審核和處理。S. 將盡力加快您的發行流程。"
        },
        {
          question: "我可以選擇發行到哪些數位音樂平台？",
          answer: "S. 合作的數位音樂平台涵蓋全球主流與在地平台，包括 Spotify, Apple Music, YouTube Music, Amazon Music, KKBOX, LINE MUSIC, MyMusic 等。您可以根據需求選擇發行至所有合作平台，或僅選擇特定平台。"
        },
        {
          question: "什麼是 AI Preflight？它如何幫助我？",
          answer: "AI Preflight 是 S. 未來將推出的智慧功能，在上傳前自動檢測您的音檔、封面和 Metadata 是否符合各數位音樂平台的規範，預先提示問題、降低退件率、加速發行流程。"
        }
      ]
    },
    {
      category: "收益與付款",
      questions: [
        {
          question: "我如何賺取收益？",
          answer: "當您的音樂作品在數位音樂平台上被播放、下載或用於其他商業用途時，您將會產生版稅收益。S. 會從各平台收集這些收益，並在扣除平台服務費後，將剩餘的收益全數支付給您。"
        },
        {
          question: "什麼是 Splits 功能？",
          answer: "Splits 功能是 S. 未來將推出的自動分帳工具，讓您可以為協作歌曲設定多位協作者的分潤比例，系統將自動向協作者發送邀請確認，並在作品產生收益時自動撥款至各協作者帳戶。"
        },
        {
          question: "我何時能收到收益？",
          answer: "各數位音樂平台向發行商支付版稅的時間不同，通常會有 2-3 個月的延遲。一旦 S. 收到來自平台的收益報告和款項，我們將在最短時間內處理並支付給您。我們支援台幣即時付款。"
        },
        {
          question: "我需要處理稅務嗎？",
          answer: "是的，作為收益的接收者，您需要自行處理相關稅務。S. 未來將推出「稅務請款單自動生成工具」，幫助您一鍵匯出符合台灣稅務規範的勞務報酬單，並提供詳盡的稅務 FAQ。"
        }
      ]
    },
    {
      category: "版權與法律",
      questions: [
        {
          question: "我的音樂版權歸誰所有？",
          answer: "您的音樂版權始終歸您所有。S. 僅作為您的數位發行合作夥伴，協助您將作品發行至各大平台，並收集和支付版稅收益。我們不會擁有您的音樂版權。"
        },
        {
          question: "什麼是內容 ID (Content ID)？",
          answer: "內容 ID 是一種數位指紋系統，主要由 YouTube 使用，用於識別和管理受版權保護的內容。當您的音樂被上傳到 YouTube 並啟用內容 ID 時，系統會自動識別任何使用您音樂的影片。S. 可以協助您管理內容 ID。"
        },
        {
          question: "我可以在我的音樂中使用採樣 (Samples) 嗎？",
          answer: "如果您在音樂中使用了其他人的採樣，您必須獲得原版權所有者的許可。未經許可使用採樣可能會導致版權侵權，並可能導致您的作品被下架或面臨法律訴訟。"
        }
      ]
    },
    {
      category: "帳戶管理與支援",
      questions: [
        {
          question: "如何聯繫客服？",
          answer: "S. 提供專業的中文客服支援。您可以透過線上客服進行即時對話、發送 E-mail 至客服信箱，或先查閱我們的常見問題文件。我們致力於提供無語言障礙的專業支援。"
        },
        {
          question: "我忘記密碼了怎麼辦？",
          answer: "在 S. 登入頁面點擊「忘記密碼」，按照指示輸入您的註冊 E-mail，我們將發送重設密碼的連結給您。"
        },
        {
          question: "S. 會提供哪些知識庫和學習資源？",
          answer: "我們提供完善的中文 FAQ 知識庫、中文版 DSP 差異表、部落格與策略指南等豐富的學習資源，包括圖文並茂、影片教學、動畫教學等多媒體呈現形式。"
        },
        {
          question: "S. 如何保護我的個人資訊和音樂數據？",
          answer: "S. 嚴格遵守相關的數據隱私法規，並採取多重安全措施來保護您的個人資訊和音樂數據，包括數據加密、安全的伺服器環境、嚴格的存取控制以及定期的安全審計。"
        }
      ]
    }
  ]

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img src={soundscapeLogo} alt="S." className="h-10 w-auto" />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-slate-600 hover:text-primary transition-colors">功能完整介紹</a>
              <a href="#zero-start" className="text-slate-600 hover:text-primary transition-colors">0元啟動計畫</a>
              <a href="#creator-list" className="text-slate-600 hover:text-primary transition-colors">精選創作者名錄</a>
               <a href="#case-studies" className="text-slate-600 hover:text-primary transition-colors">合作成功故事</a>
              <a href="#community" className="text-slate-600 hover:text-primary transition-colors">最新社群活動</a>
              <a href="#faq" className="text-slate-600 hover:text-primary transition-colors">解答常見問題</a>
              <Button variant="outline" className="mr-2">登入</Button>
              <Button>立即開始</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center"
            initial="initial"
            animate={isVisible ? "animate" : "initial"}
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp}>
              <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium">
                <Star className="w-4 h-4 mr-2" />
                亞洲創作者最信賴的數位音樂發行平台
              </Badge>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight"
              variants={fadeInUp}
            >
              讓你的作品被世界聽見
              <br />
              <span className="text-primary">收入與價值清楚可見</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              S. 是專為亞洲音樂創作者設計的數位音樂發行與文化共創平台。
              我們提供零年費、台幣即時付款、中文客服，以及全方位的創作者賦能工具，
              讓您專注創作，我們助您成長。
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              variants={fadeInUp}
            >
              <Button size="lg" className="px-8 py-3 text-lg">
                <Play className="w-5 h-5 mr-2" />
                立即開始發行
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
                <Music className="w-5 h-5 mr-2" />
                了解更多
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            {[
              { number: "10,000+", label: "活躍創作者", icon: Users },
              { number: "50+", label: "發行平台", icon: Globe },
              { number: "99.9%", label: "上線成功率", icon: CheckCircle },
              { number: "24小時", label: "客服回應", icon: Zap }
            ].map((stat, index) => (
              <motion.div key={index} variants={fadeInUp} className="text-center">
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                <div className="text-3xl font-bold text-slate-900 mb-2">{stat.number}</div>
                <div className="text-slate-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              為創作者而生的全方位解決方案
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              從發行到收益，從推廣到社群，S. 提供您音樂事業所需的一切工具與支援
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            {[
              {
                icon: Zap,
                title: "AI Preflight 智慧檢測",
                description: "上傳前自動檢測音檔、封面和 Metadata，預先提示問題，讓您一次就通過審核",
                badge: "即將推出"
              },
              {
                icon: TrendingUp,
                title: "自動 Splits 分帳",
                description: "輕鬆設定協作者分潤比例，系統自動撥款，告別手動對帳的繁瑣",
                badge: "即將推出"
              },
              {
                icon: Shield,
                title: "稅務請款單自動生成",
                description: "一鍵匯出符合台灣稅務規範的勞務報酬單，解決會計麻煩",
                badge: "即將推出"
              },
              {
                icon: Globe,
                title: "智慧連結 & 社群推廣",
                description: "一站式智慧連結工具，整合預存、播放連結、社群導流和粉絲互動功能",
                badge: "即將推出"
              },
              {
                icon: Heart,
                title: "零年費 & 台幣即時付款",
                description: "無門檻發行服務，支援台幣即時付款，提供最便捷的收款體驗",
                badge: "現已提供"
              },
              {
                icon: Users,
                title: "中文客服 & 在地支援",
                description: "專業中文客服團隊，深度理解在地創作者需求，提供無語言障礙的支援",
                badge: "現已提供"
              }
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <feature.icon className="w-8 h-8 text-primary" />
                      <Badge variant={feature.badge === "現已提供" ? "default" : "secondary"} className="text-xs">
                        {feature.badge}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* User Journey Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              為不同階段的創作者量身打造
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              無論您是初次發行的新手，還是經驗豐富的專業音樂人，S. 都有適合您的解決方案
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            {[
              {
                title: "新進型創作者",
                subtitle: "音樂旅程啟動者",
                description: "首次發行、個人製作、對數位發行流程不熟悉",
                features: ["零門檻註冊", "AI 智慧檢測", "清晰收益說明", "基礎行銷工具"],
                color: "from-green-400 to-blue-500"
              },
              {
                title: "成長型創作者",
                subtitle: "內容成長駕駛者",
                description: "已有作品、開始累積聽眾、尋求提升作品表現",
                features: ["數據洞察分析", "自動分帳功能", "進階行銷工具", "社群活動參與"],
                color: "from-purple-400 to-pink-500"
              },
              {
                title: "專業型創作者",
                subtitle: "音樂企業家經營者",
                description: "已具市場知名度、作品量大、尋求拓展版稅收入",
                features: ["稅務自動化", "商務媒合機會", "年度回饋機制", "專屬顧問服務"],
                color: "from-yellow-400 to-red-500"
              }
            ].map((segment, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${segment.color}`}></div>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl text-slate-900">{segment.title}</CardTitle>
                    <CardDescription className="text-lg font-medium text-primary">
                      {segment.subtitle}
                    </CardDescription>
                    <p className="text-slate-600 mt-2">{segment.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {segment.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* creator-list Section */}
      <section id="creator-list" className="py-20 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              S. 上多采多姿的創作者
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              眾多創作者他們各自獨立綻放，但又透過 S. 彼此連結一齊成長茁壯
            </p>
      
      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="flex items-center justify-center mb-4">
              <HelpCircle className="w-8 h-8 text-primary mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                常見問題
              </h2>
            </div>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              找到您需要的答案，快速了解 S. 的服務與功能
            </p>
          </motion.div>

          <motion.div 
            className="space-y-6"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            {faqData.map((category, categoryIndex) => (
              <motion.div key={categoryIndex} variants={fadeInUp}>
                <h3 className="text-xl font-semibold text-slate-900 mb-4 border-l-4 border-primary pl-4">
                  {category.category}
                </h3>
                <div className="space-y-3 ml-6">
                  {category.questions.map((faq, questionIndex) => {
                    const globalIndex = categoryIndex * 100 + questionIndex;
                    return (
                      <Card key={questionIndex} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                        <CardHeader 
                          className="cursor-pointer"
                          onClick={() => toggleFAQ(globalIndex)}
                        >
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-lg text-slate-900 pr-4">
                              {faq.question}
                            </CardTitle>
                            {openFAQ === globalIndex ? (
                              <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                            )}
                          </div>
                        </CardHeader>
                        {openFAQ === globalIndex && (
                          <CardContent className="pt-0">
                            <p className="text-slate-600 leading-relaxed">
                              {faq.answer}
                            </p>
                          </CardContent>
                        )}
                      </Card>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center mt-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p className="text-slate-600 mb-4">
              還有其他問題嗎？我們的客服團隊隨時為您服務
            </p>
            <Button variant="outline" size="lg">
              聯繫客服
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              準備好讓世界聽見您的音樂了嗎？
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              加入 S.，與超過 10,000 位創作者一起，在音樂的道路上共創、成長、成功
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="px-8 py-3 text-lg">
                <Play className="w-5 h-5 mr-2" />
                立即開始發行
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-3 text-lg border-white text-white hover:bg-white hover:text-primary">
                <ArrowRight className="w-5 h-5 mr-2" />
                了解更多功能
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <img src={soundscapeLogo} alt="S." className="h-12 w-auto mb-4 brightness-0 invert" />
              <p className="text-slate-300 mb-4 max-w-md">
                S. 是亞洲創作者最信賴的數位音樂發行與文化共創平台，
                讓您的作品被世界聽見，收入與價值清楚可見。
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white">
                  Facebook
                </Button>
                <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white">
                  Instagram
                </Button>
                <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white">
                  YouTube
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">產品</h3>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#" className="hover:text-white transition-colors">音樂發行</a></li>
                <li><a href="#" className="hover:text-white transition-colors">收益管理</a></li>
                <li><a href="#" className="hover:text-white transition-colors">行銷工具</a></li>
                <li><a href="#" className="hover:text-white transition-colors">數據分析</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">支援</h3>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#" className="hover:text-white transition-colors">常見問題</a></li>
                <li><a href="#" className="hover:text-white transition-colors">聯繫客服</a></li>
                <li><a href="#" className="hover:text-white transition-colors">知識庫</a></li>
                <li><a href="#" className="hover:text-white transition-colors">社群論壇</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; 2025 S. All rights reserved. | 隱私政策 | 服務條款</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App


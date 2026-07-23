// 结构化简历数据 —— 中英双语。供 home / about 页面复用。
// 修改此处即可同步更新首页与关于页，避免中英两套页面重复维护。

export interface Stat {
  value: string;
  label: string;
}

export interface FocusArea {
  title: string;
  desc: string;
}

export interface ExperienceItem {
  period: string; // 展示用时间段
  current?: boolean; // 是否为当前在职（高亮）
  company: string;
  role: string;
  location: string;
  highlights: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface EducationItem {
  school: string;
  degree: string;
  year: string;
}

export interface AwardItem {
  year: string;
  title: string;
}

export interface ResumeContent {
  role: string;
  tagline: string;
  bio: string[];
  stats: Stat[];
  focusAreas: FocusArea[];
  experience: ExperienceItem[];
  skills: SkillGroup[];
  education: EducationItem[];
  awards: AwardItem[];
}

export const resume: { zh: ResumeContent; en: ResumeContent } = {
  zh: {
    role: '大数据专家 · 业务风控',
    tagline:
      '10 年以上大数据与分布式系统经验，5 年以上业务风控实战。专注实时图技术与风控资损治理，曾将营销补贴资损率从 10% 降至 1% 以内。',
    bio: [
      '10 年以上深耕大数据领域，5 年以上风控领域经验；在大数据、分布式系统、风控等方面有多年研究与开发积累，擅长把复杂的技术问题拆解为可落地的工程方案。',
      '我长期参与开源社区建设（Apache HugeGraph Committer），持续打磨内部技术栈。这个网站既是我的在线简历，也是我沉淀技术思考的地方——欢迎通过下方方式与我联系。',
    ],
    stats: [
      { value: '10+', label: '年 · 大数据 / 分布式' },
      { value: '5+', label: '年 · 业务风控实战' },
      { value: '<1%', label: '营销补贴资损率' },
      { value: 'PB+', label: '级集群架构经验' },
    ],
    focusAreas: [
      {
        title: '实时图技术',
        desc: '基于 HBase / HugeGraph 自研图存储与查询，k-hop 子图并发查询 P99 ≤ 100ms，为风控实时决策提供稳定图服务。',
      },
      {
        title: '业务风控',
        desc: '面向刷单、假单、内容安全、切单等风险，构建图策略与图特征，将年度资损降至 1% 以内。',
      },
      {
        title: '实时 / 离线数仓',
        desc: 'Flink + Kafka 实时图特征链路，Spark 离线全量图挖掘，打通用户准入、券风控等关键风控环节。',
      },
      {
        title: 'OLAP 引擎',
        desc: 'Druid / ClickHouse / Doris 实时 BI 引擎建设，支撑公司级 PB 级集群与核心指标大盘。',
      },
    ],
    experience: [
      {
        period: '2020 — 至今',
        current: true,
        company: '货拉拉',
        role: '大数据专家 · 业务风控部',
        location: '北京',
        highlights: [
          '独立负责业务风控部大数据与图技术建设，自研高效实时图存储，将营销补贴资损率从 10% 降到 1% 以内。',
          '为货运、出行、国际化等业务提供实时图服务，在刷单、假单、内容安全、切单等风控场景提供图策略与图特征。',
          '图存储技术迭代：HBase 自研图中间件（k-hop P99 ≤ 100ms）→ 引入 HugeGraph，提供 Gremlin 实时查询，交付从周级缩短到天/小时级。',
          '基于设备指纹、支付 ID 构建用户/司机实体图谱，Spark 离线挖掘假新人、大子图危险账号、司货同人等标签，支撑补贴大战与名单库 1-hop 能力。',
          '统一图模型沟通与 Gremlin 查询语言，建立图需求开发机制，缩短交付周期、降低协作成本。',
          '开源贡献与影响力：Apache HugeGraph Committer 优化内核、设计预分区；带队获货拉拉黑客马拉松第四名；基于 LLM 构建 Graph Agent 辅助分析。',
        ],
      },
      {
        period: '2018 — 2020',
        company: '知乎',
        role: '数据架构平台开发工程师',
        location: '北京',
        highlights: [
          '负责 OLAP 引擎能力建设，基于 Druid 为公司级实时 BI 提供高效引擎，服务增长与商业化核心指标大盘；集群 100+ 台、存储 1PB+。',
          '稳定性建设：基于历史查询分析设置服务端超时限制并释放资源，保障 99% 查询 10s 内返回。',
          '调研 ClickHouse / Doris 新一代 OLAP 并完成适配 POC；输出知乎专栏《Druid 集群优化实践》。',
        ],
      },
      {
        period: '2017 — 2018',
        company: '滴滴出行',
        role: '基础平台高级研发工程师',
        location: '北京',
        highlights: [
          '重构 HBase 监控系统（采集 / 存储 / 展示），缩短故障定位时间，提升重点业务提前发现能力。',
          '业务支持：指导 RowKey 设计与容量评估，处理数据倾斜 / 热点、RS CPU 飙高、宕机等线上问题。',
        ],
      },
      {
        period: '2015 — 2017',
        company: '赛思信安',
        role: '大数据开发工程师',
        location: '北京',
        highlights: [
          '基于 HBase 设计并开发海量小文件系统，支撑类 S3 存储业务。',
          '发布部署 100 台节点，支撑日均入库 2 亿文件、7 天存储、总规模 140TB。',
        ],
      },
    ],
    skills: [
      {
        category: '分布式 & 大数据',
        items: ['HBase', 'Hadoop', 'Spark', 'Kafka', 'Flink'],
      },
      {
        category: '图技术 & 风控',
        items: ['HugeGraph', 'Gremlin', '自研图存储', '实时图查询', '风控策略', '特征工程'],
      },
      {
        category: '数仓 & OLAP',
        items: ['实时数仓', 'Druid', 'ClickHouse', 'Doris', '实时 BI'],
      },
      {
        category: '工程 & 语言',
        items: ['Java', 'Scala', 'Python', 'SQL', 'Linux'],
      },
    ],
    education: [
      {
        school: '哈尔滨工业大学',
        degree: '本科 · 软件工程',
        year: '2015 届',
      },
    ],
    awards: [
      { year: '2023', title: 'Apache HugeGraph Committer' },
      { year: '2024', title: '货拉拉黑客马拉松 第四名（队长）' },
      { year: '×4', title: '货拉拉技术中心 价值观之星' },
      { year: '连续 3 年', title: '业务风控部绩效前 15%（S / A）' },
    ],
  },

  en: {
    role: 'Big Data Expert · Risk Control',
    tagline:
      '10+ years in big data & distributed systems, 5+ years in risk control. Focused on real-time graph tech and loss-rate governance — cut subsidy loss rate from 10% to under 1%.',
    bio: [
      '10+ years in big data with 5+ years in risk control. I have spent years researching and building in big data, distributed systems and risk control, and I enjoy turning hard technical problems into shippable engineering.',
      "I'm an Apache HugeGraph Committer and keep refining our internal tech stack through open source. This site is both my online resume and a place to distill my thinking — feel free to reach me via the channels below.",
    ],
    stats: [
      { value: '10+', label: 'yrs · Big Data / Distributed' },
      { value: '5+', label: 'yrs · Risk Control' },
      { value: '<1%', label: 'Subsidy loss rate' },
      { value: 'PB+', label: 'scale cluster experience' },
    ],
    focusAreas: [
      {
        title: 'Real-time Graph',
        desc: 'Self-built graph storage & query on HBase / HugeGraph; k-hop subgraph P99 ≤ 100ms for real-time risk decisions.',
      },
      {
        title: 'Risk Control',
        desc: 'Graph strategies & features for brush / fake-order / content-safety / order-switching risks; cut annual loss rate below 1%.',
      },
      {
        title: 'Real-time / Batch Warehouse',
        desc: 'Flink + Kafka real-time graph feature pipelines; Spark offline full-graph mining across onboarding & coupon risk.',
      },
      {
        title: 'OLAP Engine',
        desc: 'Druid / ClickHouse / Doris real-time BI engine; PB-scale clusters powering company-wide dashboards.',
      },
    ],
    experience: [
      {
        period: '2020 — Present',
        current: true,
        company: 'Lalamove (Huolala)',
        role: 'Big Data Expert · Business Risk Control',
        location: 'Beijing',
        highlights: [
          'Owned big-data & graph tech for the risk-control dept.; self-built real-time graph storage cut subsidy loss rate from 10% to under 1%.',
          'Delivered real-time graph services for freight, mobility & international; graph strategies/features for brush, fake-order, content-safety & order-switching risks.',
          'Evolved graph storage: HBase middleware (k-hop P99 ≤ 100ms) → adopted HugeGraph for Gremlin real-time queries, shortening delivery from weeks to hours.',
          'Built user/driver entity graphs from device fingerprints & payment IDs; Spark offline mining of fake-newbie, large-subgraph & same-person labels powering subsidy & watchlist 1-hop.',
          'Unified graph modeling language (Gremlin) & requirement workflow, cutting delivery cycle and collaboration cost.',
          'Open source & impact: Apache HugeGraph Committer (kernel optimization, pre-partitioning); hackathon 4th place; LLM-based Graph Agent for self-serve analysis.',
        ],
      },
      {
        period: '2018 — 2020',
        company: 'Zhihu',
        role: 'Data Platform Engineer',
        location: 'Beijing',
        highlights: [
          'Built OLAP engine on Druid for company-wide real-time BI; 100+ nodes, 1PB+ storage serving growth & monetization dashboards.',
          'Stability: server-side query timeout & resource release kept 99% of queries under 10s.',
          'Evaluated ClickHouse / Doris and delivered POCs; authored Zhihu column "Druid Cluster Optimization Practice".',
        ],
      },
      {
        period: '2017 — 2018',
        company: 'Didi Chuxing',
        role: 'Senior R&D Engineer · Infra Platform',
        location: 'Beijing',
        highlights: [
          'Rebuilt HBase monitoring (collect / store / visualize), cutting MTTR and improving early detection for key businesses.',
          'User support: RowKey design & capacity planning; resolved data skew/hotspot, RS CPU spikes and crashes.',
        ],
      },
      {
        period: '2015 — 2017',
        company: 'Saisi XinAn',
        role: 'Big Data Engineer',
        location: 'Beijing',
        highlights: [
          'Designed & built an HBase-based small-file system for S3-like storage.',
          'Deployed 100-node cluster ingesting 200M files/day with 140TB / 7-day retention.',
        ],
      },
    ],
    skills: [
      {
        category: 'Distributed & Big Data',
        items: ['HBase', 'Hadoop', 'Spark', 'Kafka', 'Flink'],
      },
      {
        category: 'Graph & Risk Control',
        items: ['HugeGraph', 'Gremlin', 'Custom Graph Store', 'Realtime Query', 'Risk Strategy', 'Feature Eng.'],
      },
      {
        category: 'Warehouse & OLAP',
        items: ['Realtime DWH', 'Druid', 'ClickHouse', 'Doris', 'Realtime BI'],
      },
      {
        category: 'Engineering & Languages',
        items: ['Java', 'Scala', 'Python', 'SQL', 'Linux'],
      },
    ],
    education: [
      {
        school: 'Harbin Institute of Technology',
        degree: 'B.S. · Software Engineering',
        year: 'Class of 2015',
      },
    ],
    awards: [
      { year: '2023', title: 'Apache HugeGraph Committer' },
      { year: '2024', title: 'Lalamove Hackathon — 4th place (team lead)' },
      { year: '×4', title: 'Lalamove Tech-Center Value Star' },
      { year: '3 yrs', title: 'Top 15% performance (S / A), Risk Control' },
    ],
  },
};

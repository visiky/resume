import React from 'react';
import { Rate, Tag } from 'antd';
import {
  PhoneFilled,
  MailFilled,
  GithubFilled,
  ZhihuCircleFilled,
  CheckCircleFilled,
  ScheduleFilled,
  EnvironmentFilled,
  HeartFilled,
  CrownFilled,
} from '@ant-design/icons';
import cx from 'classnames';
import _ from 'lodash-es';
import { FormattedMessage, useIntl } from 'react-intl';
import { getDefaultTitleNameMap } from '@/data/constant';
import { Avatar } from '../../Avatar';
import type { ResumeConfig, ThemeConfig } from '../../types';
import './index.less';

type Props = {
  value: ResumeConfig;
  theme: ThemeConfig;
};

const Wrapper = ({ className, title, color, children }) => {
  return (
    <div className={cx('section', className)}>
      <div className="section-title" style={{ color }}>
        <span className="title">{title}</span>
        <span className="title-addon" />
      </div>
      <div className="section-body">{children}</div>
    </div>
  );
};

/**
 * @description 简历内容区
 */
export const Template2: React.FC<Props> = props => {
  const intl = useIntl();
  const { value, theme } = props;

  /** 个人基础信息 */
  const profile = _.get(value, 'profile');

  const titleNameMap = _.get(
    value,
    'titleNameMap',
    getDefaultTitleNameMap({ intl })
  );

  /** 教育背景 */
  const educationList = _.get(value, 'educationList');

  /** 工作经历 */
  const workExpList = _.get(value, 'workExpList');

  /** 项目经验 */
  const projectList = _.get(value, 'projectList');

  /** 个人技能 */
  const skillList = _.get(value, 'skillList');

  /** 更多信息 */
  const awardList = _.get(value, 'awardList');

  /** 作品 */
  const workList = _.get(value, 'workList');

  /** 自我介绍 */
  const aboutme = _.split(_.get(value, ['aboutme', 'aboutme_desc']), '\n');

  return (
    <div className="template2-resume resume-content">
      <div className="basic-info">
        <div className="profile">
          <div className="profile-info">
            {profile?.name && <div className="name">{profile.name}</div>}
            <div className="profile-list">
              {profile?.mobile && (
                <div className="mobile">
                  <PhoneFilled style={{ color: theme.color, opacity: 0.85 }} />
                  {profile.mobile}
                </div>
              )}
              {profile?.email && (
                <div className="email">
                  <MailFilled style={{ color: theme.color, opacity: 0.85 }} />
                  {profile.email}
                </div>
              )}
              {profile?.github && (
                <div className="github">
                  <GithubFilled style={{ color: theme.color, opacity: 0.85 }} />
                  <span
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      window.open(profile.github);
                    }}
                  >
                    {profile.github}
                  </span>
                </div>
              )}
              {profile?.zhihu && (
                <div className="github">
                  <ZhihuCircleFilled
                    style={{ color: theme.color, opacity: 0.85 }}
                  />
                  <span
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      window.open(profile.zhihu);
                    }}
                  >
                    {profile.zhihu}
                  </span>
                </div>
              )}
              {profile?.workExpYear && (
                <div className="work-exp-year">
                  <ScheduleFilled
                    style={{ color: theme.color, opacity: 0.85 }}
                  />
                  <span>
                    <FormattedMessage id="工作经验" />: {profile.workExpYear}
                  </span>
                </div>
              )}
              {profile?.workPlace && (
                <div className="work-place">
                  <EnvironmentFilled
                    style={{ color: theme.color, opacity: 0.85 }}
                  />
                  <span>
                    <FormattedMessage id="期望工作地" />: {profile.workPlace}
                  </span>
                </div>
              )}
              {profile?.positionTitle && (
                <div className="expect-job">
                  <HeartFilled style={{ color: theme.color, opacity: 0.85 }} />
                  <span>
                    <FormattedMessage id="职位" />: {profile.positionTitle}
                  </span>
                </div>
              )}
            </div>
          </div>
          {/* 头像 */}
          {!value?.avatar?.hidden && (
            <Avatar
              avatarSrc={value?.avatar?.src}
              className="avatar"
              shape={value?.avatar?.shape}
              size={value?.avatar?.size}
            />
          )}
        </div>
        {/* </Wrapper> */}
        {/* 教育背景 */}
        {educationList?.length ? (
          <Wrapper
            // title=<FormattedMessage id="教育背景" />
            title={titleNameMap.educationList}
            className="section section-education"
            color={theme.color}
          >
            {educationList.map((education, idx) => {
              const [start, end] = education.edu_time;
              return (
                <div key={idx.toString()} className="education-item">
                  <div>
                    <span>
                      <b>{education.school}</b>
                      <span style={{ marginLeft: '8px' }}>
                        {education.major && <span>{education.major}</span>}
                        {education.academic_degree && (
                          <span
                            className="sub-info"
                            style={{ marginLeft: '4px' }}
                          >
                            ({education.academic_degree})
                          </span>
                        )}
                      </span>
                    </span>
                    <span className="sub-info" style={{ float: 'right' }}>
                      {start}
                      {end ? ` ~ ${end}` : ' 至今'}
                    </span>
                  </div>
                </div>
              );
            })}
          </Wrapper>
        ) : null}
        {workList?.length ? (
          <Wrapper
            // title=<FormattedMessage id="个人作品" />
            title={titleNameMap.workList}
            className="section section-work"
            color={theme.color}
          >
            {workList.map((work, idx) => {
              return (
                <div key={idx.toString()}>
                  <div>
                    <CrownFilled
                      style={{ color: '#ffc107', marginRight: '8px' }}
                    />
                    <b className="info-name">{work.work_name}</b>
                    <a className="sub-info" href={work.visit_link}>
                      <FormattedMessage id="访问链接" />
                    </a>
                  </div>
                  {work.work_desc && <div>{work.work_desc}</div>}
                </div>
              );
            })}
          </Wrapper>
        ) : null}
        <Wrapper
          title={<FormattedMessage id="自我介绍" />}
          className="section section-aboutme"
          color={theme.color}
        >
          {aboutme.map((d, idx) => (
            <div key={`${idx}`}>{d}</div>
          ))}
        </Wrapper>
        {/* 专业技能 */}
        {skillList?.length ? (
          <Wrapper
            // title=<FormattedMessage id="专业技能" />
            title={titleNameMap.skillList}
            className="section section-skill"
            color={theme.color}
          >
            {skillList.map((skill, idx) => {
              const skills = _.split(skill.skill_desc, '\n').join('；');
              return skills ? (
                <div className="skill-item" key={idx.toString()}>
                  <span>
                    <CheckCircleFilled
                      style={{ color: '#ffc107', marginRight: '8px' }}
                    />
                    {skills}
                  </span>
                  {skill.skill_level && (
                    <Rate
                      allowHalf
                      disabled
                      value={skill.skill_level / 20}
                      className="skill-rate"
                    />
                  )}
                </div>
              ) : null;
            })}
          </Wrapper>
        ) : null}
        {/* {awardList?.length ? (
          <Wrapper
            // title="更多信息"
            title={titleNameMap.awardList}
            className="section section-award"
            color={theme.color}
          >
            {awardList.map((award, idx) => {
              return (
                <div key={idx.toString()}>
                  <TrophyFilled
                    style={{ color: '#ffc107', marginRight: '8px' }}
                  />
                  <span className="info-name">{award.award_info}</span>
                  {award.award_time && (
                    <span className="sub-info award-time">
                      ({award.award_time})
                    </span>
                  )}
                </div>
              );
            })}
          </Wrapper>
        ) : null} */}
      </div>
      <div className="main-info">
        {workExpList?.length ? (
          <Wrapper
            className="experience"
            // title=<FormattedMessage id="工作经历" />
            title={titleNameMap.workExpList}
            color={theme.color}
          >
            <div className="section section-work-exp">
              {_.map(workExpList, (work, idx) => {
                const [start = null, end = null] =
                  typeof work.work_time === 'string'
                    ? `${work.work_time || ''}`.split(',')
                    : work.work_time;
                return work ? (
                  <div className="section-item" key={idx.toString()}>
                    <div className="section-info">
                      <b className="info-name">
                        {work.company_name}
                        <span className="sub-info">{work.department_name}</span>
                      </b>
                      <span className="info-time">
                        {start}
                        {end ? ` ~ ${end}` : <FormattedMessage id=" 至今" />}
                      </span>
                    </div>
                    <div className="work-description">{work.work_desc}</div>
                  </div>
                ) : null;
              })}
            </div>
          </Wrapper>
        ) : null}
        {projectList?.length ? (
          <Wrapper
            className="skill"
            // title=<FormattedMessage id="项目经历" />
            title={titleNameMap.projectList}
            color={theme.color}
          >
            <div className="section section-project">
              {_.map(projectList, (project, idx) =>
                project ? (
                  <div className="section-item" key={idx.toString()}>
                    <div className="section-info">
                      <b className="info-name">
                        {project.project_name}
                        <span className="info-time">
                          {project.project_time}
                        </span>
                      </b>
                      {project.project_role && (
                        <Tag color={theme.tagColor}>{project.project_role}</Tag>
                      )}
                    </div>
                    <div className="section-detail">
                      <span>
                        <FormattedMessage id="项目描述" />：
                      </span>
                      <span>{project.project_desc}</span>
                    </div>
                    <div className="section-detail">
                      <span>
                        <FormattedMessage id="主要工作" />：
                      </span>
                      <span className="project-content">
                        {project.project_content}
                      </span>
                    </div>
                  </div>
                ) : null
              )}
            </div>
          </Wrapper>
        ) : null}
      </div>
    </div>
  );
};

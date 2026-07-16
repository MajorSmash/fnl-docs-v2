export const DOCUMENT_SECTIONS = Object.freeze({
  MANUAL: 'Manual',
  DESCRIPTOR: 'Parameters',
  RELEASE: 'Releases',
  USECASE: 'Set Topics',
  SET_TOPIC: 'Set Topics',
  APPROVED_SUPPORT: 'Support Q&A',
});

export function sectionForDocType(docType) {
  return DOCUMENT_SECTIONS[docType] ?? 'Documentation';
}

export function versionBadges(data) {
  const badges = [];

  if (data.version != null) badges.push(`Version ${data.version}`);
  if (data.doc_revision != null) badges.push(`Revision ${data.doc_revision}`);
  if (data.version_min != null) badges.push(`From ${data.version_min}`);
  if (data.version_max != null) badges.push(`Through ${data.version_max}`);
  if (Array.isArray(data.ue_versions) && data.ue_versions.length) {
    badges.push(`UE ${data.ue_versions.join(', ')}`);
  }

  return badges;
}

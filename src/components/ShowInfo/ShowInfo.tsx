import {
  FieldTitle,
  FieldValue,
  InfoField,
  InfoGrid,
  InfoTitle,
  InfoWrapper,
} from './ShowInfo.styled';

export function ShowInfo({
  network = '',
  schedule = [],
  status = '',
  genres = [],
}: {
  network: string | undefined;
  schedule: string[] | undefined;
  status: string | undefined;
  genres: string[] | undefined;
}) {
  return (
    <InfoWrapper>
      <InfoTitle>Show Info</InfoTitle>
      <InfoGrid>
        <InfoField>
          <FieldTitle>Streamed on</FieldTitle>
          <FieldValue>{network}</FieldValue>
        </InfoField>
        <InfoField>
          <FieldTitle>Schedule</FieldTitle>
          <FieldValue>{schedule.join(', ')}</FieldValue>
        </InfoField>
        <InfoField>
          <FieldTitle>Status</FieldTitle>
          <FieldValue>{status}</FieldValue>
        </InfoField>
        <InfoField>
          <FieldTitle>Genres</FieldTitle>
          <FieldValue>{genres.join(', ')}</FieldValue>
        </InfoField>
      </InfoGrid>
    </InfoWrapper>
  );
}

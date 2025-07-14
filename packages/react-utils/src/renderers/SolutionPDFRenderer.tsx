import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { Solution, Customer, Country, Tag, Technology, Review } from '@justdiego/types';
import { formatDate } from '@justdiego/utils';

// Clean, professional invoice-style design
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: 'Helvetica',
    backgroundColor: '#FFFFFF',
  },
  
  // Header
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
    paddingBottom: 15,
    borderBottom: '1px solid #000000',
  },
  
  companyInfo: {
    flex: 1,
  },
  
  companyName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 5,
  },
  
  companyDetails: {
    fontSize: 9,
    color: '#666666',
    lineHeight: 1.4,
  },
  
  documentInfo: {
    alignItems: 'flex-end',
  },
  
  documentTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 8,
  },
  
  documentMeta: {
    fontSize: 9,
    color: '#666666',
    textAlign: 'right',
    lineHeight: 1.4,
  },
  
  // Project title section
  projectSection: {
    marginBottom: 25,
  },
  
  projectTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 8,
  },
  
  projectDescription: {
    fontSize: 10,
    color: '#333333',
    lineHeight: 1.4,
    marginBottom: 15,
  },
  
  // Client info section
  clientSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
    paddingBottom: 15,
    borderBottom: '1px solid #CCCCCC',
  },
  
  clientInfo: {
    flex: 1,
  },
  
  clientLabel: {
    fontSize: 9,
    color: '#666666',
    textTransform: 'uppercase',
    marginBottom: 5,
  },
  
  clientValue: {
    fontSize: 11,
    color: '#000000',
    fontWeight: 'bold',
  },
  
  // Table styles
  table: {
    marginBottom: 25,
  },
  
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#F8F8F8',
    borderBottom: '1px solid #000000',
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  
  tableHeaderText: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#000000',
    textTransform: 'uppercase',
  },
  
  tableRow: {
    flexDirection: 'row',
    borderBottom: '1px solid #CCCCCC',
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  
  tableCell: {
    fontSize: 9,
    color: '#333333',
  },
  
  tableCellBold: {
    fontSize: 9,
    color: '#000000',
    fontWeight: 'bold',
  },
  
  // Column widths
  col60: { width: '60%' },
  col20: { width: '20%' },
  col15: { width: '15%' },
  
  // Problem/Result section
  problemResultSection: {
    flexDirection: 'row',
    gap: 15,
    marginBottom: 25,
  },
  
  problemBox: {
    flex: 1,
    padding: 12,
    backgroundColor: '#F8F8F8',
    border: '1px solid #CCCCCC',
  },
  
  resultBox: {
    flex: 1,
    padding: 12,
    backgroundColor: '#F8F8F8',
    border: '1px solid #CCCCCC',
  },
  
  boxTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  
  boxContent: {
    fontSize: 9,
    color: '#333333',
    lineHeight: 1.4,
  },
  
  // Technology section
  techSection: {
    marginBottom: 25,
  },
  
  sectionTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 10,
    textTransform: 'uppercase',
  },
  
  techList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
  },
  
  techTag: {
    backgroundColor: '#F0F0F0',
    padding: '4px 8px',
    fontSize: 8,
    color: '#333333',
    border: '1px solid #CCCCCC',
  },
  
  // Review section
  reviewSection: {
    marginBottom: 25,
    padding: 15,
    backgroundColor: '#F8F8F8',
    border: '1px solid #CCCCCC',
  },
  
  reviewTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  
  reviewContent: {
    fontSize: 9,
    color: '#333333',
    lineHeight: 1.4,
    marginBottom: 8,
    fontStyle: 'italic',
  },
  
  reviewAuthor: {
    fontSize: 8,
    color: '#666666',
    textAlign: 'right',
  },
  
  stars: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  
  star: {
    fontSize: 10,
    color: '#333333',
    marginRight: 2,
  },
  
  // Footer
  footer: {
    marginTop: 30,
    paddingTop: 15,
    borderTop: '1px solid #CCCCCC',
    textAlign: 'center',
  },
  
  footerText: {
    fontSize: 8,
    color: '#666666',
  },
});

interface SolutionPDFTemplateProps {
  solution: Solution;
  customer?: Customer;
  country?: Country;
  tags: Tag[];
  technologies: Technology[];
  review?: Review;
}

export const SolutionPDFTemplate: React.FC<SolutionPDFTemplateProps> = ({
  solution,
  customer,
  country,
  technologies,
  review,
}) => {
  const customerName = customer?.id.replace('customer-', '').replace('-', ' ').toUpperCase() || 'Unknown Customer';
  const generateDocumentNumber = () => `SOL-${Date.now().toString().slice(-6)}`;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.companyInfo}>
            <Text style={styles.companyName}>JustDiego</Text>
            <Text style={styles.companyDetails}>
              hello@justdiego.com{'\n'}
              justdiego.com
            </Text>
          </View>
          
          <View style={styles.documentInfo}>
            <Text style={styles.documentTitle}>Solution Report</Text>
            <Text style={styles.documentMeta}>
              Document #: {generateDocumentNumber()}{'\n'}
              Date: {new Date().toLocaleDateString()}{'\n'}
              Status: Completed
            </Text>
          </View>
        </View>

        {/* Project Title */}
        <View style={styles.projectSection}>
          <Text style={styles.projectTitle}>{solution.title}</Text>
          <Text style={styles.projectDescription}>{solution.shortDescription}</Text>
        </View>

        {/* Client Information */}
        <View style={styles.clientSection}>
          <View style={styles.clientInfo}>
            <Text style={styles.clientLabel}>Client</Text>
            <Text style={styles.clientValue}>{customerName}</Text>
          </View>
          
          <View style={styles.clientInfo}>
            <Text style={styles.clientLabel}>Location</Text>
            <Text style={styles.clientValue}>{country?.name || 'Unknown'}</Text>
          </View>
          
          <View style={styles.clientInfo}>
            <Text style={styles.clientLabel}>Completion Date</Text>
            <Text style={styles.clientValue}>{formatDate(solution.completedAt.toISOString())}</Text>
          </View>
          
          <View style={styles.clientInfo}>
            <Text style={styles.clientLabel}>Demo</Text>
            <Text style={styles.clientValue}>{solution.demoUrl ? 'Available' : 'Not Available'}</Text>
          </View>
        </View>

        {/* Project Details Table */}
        <View style={styles.table}>
          <Text style={styles.sectionTitle}>Project Details</Text>
          
          <View style={styles.tableHeader}>
            <Text style={[styles.tableHeaderText, styles.col60]}>Description</Text>
            <Text style={[styles.tableHeaderText, styles.col20]}>Category</Text>
            <Text style={[styles.tableHeaderText, styles.col20]}>Status</Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={[styles.tableCellBold, styles.col60]}>{solution.fullDescription}</Text>
            <Text style={[styles.tableCell, styles.col20]}>Full Project</Text>
            <Text style={[styles.tableCell, styles.col20]}>Completed</Text>
          </View>

          {solution.technicalDetails.map((detail, index) => (
            <View key={index} style={styles.tableRow}>
              <Text style={[styles.tableCell, styles.col60]}>{detail.title}</Text>
              <Text style={[styles.tableCell, styles.col20]}>Technical</Text>
              <Text style={[styles.tableCell, styles.col20]}>Implemented</Text>
            </View>
          ))}

          {solution.outcomes.map((outcome, index) => (
            <View key={`outcome-${index}`} style={styles.tableRow}>
              <Text style={[styles.tableCell, styles.col60]}>{outcome}</Text>
              <Text style={[styles.tableCell, styles.col20]}>Outcome</Text>
              <Text style={[styles.tableCell, styles.col20]}>Achieved</Text>
            </View>
          ))}
        </View>

        {/* Problem & Solution */}
        <View style={styles.problemResultSection}>
          <View style={styles.problemBox}>
            <Text style={styles.boxTitle}>Problem</Text>
            <Text style={styles.boxContent}>{solution.problem}</Text>
          </View>
          <View style={styles.resultBox}>
            <Text style={styles.boxTitle}>Solution</Text>
            <Text style={styles.boxContent}>{solution.result}</Text>
          </View>
        </View>

        {/* Technologies */}
        {technologies.length > 0 && (
          <View style={styles.techSection}>
            <Text style={styles.sectionTitle}>Technologies Used</Text>
            <View style={styles.techList}>
              {technologies.map((tech) => (
                <View key={tech.id} style={styles.techTag}>
                  <Text>{tech.name}</Text>
                </View>
              ))}
            </View>
          </View>
        )}

        {/* Client Review */}
        {review && (
          <View style={styles.reviewSection}>
            <Text style={styles.reviewTitle}>Client Feedback</Text>
            <View style={styles.stars}>
              {[...Array(review.rating)].map((_, i) => (
                <Text key={i} style={styles.star}>★</Text>
              ))}
              {[...Array(5 - review.rating)].map((_, i) => (
                <Text key={i} style={styles.star}>☆</Text>
              ))}
            </View>
            <Text style={styles.reviewContent}>"{review.content}"</Text>
            <Text style={styles.reviewAuthor}>
              — {review.authorId.replace('author-', '').replace('-', ' ')}
            </Text>
          </View>
        )}

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            © {new Date().getFullYear()} JustDiego
          </Text>
        </View>
      </Page>
    </Document>
  );
};
